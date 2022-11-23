import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { Uri } from 'vscode'
import { CodePointCharStream } from 'antlr4ts/CodePointCharStream'
import { CommonTokenStream } from 'antlr4ts'
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext'
import {
  AssetScriptContext,
  ContractContext,
  ContractExtendsContext,
  ExtendsContext,
  ImplementsContext,
  InterfaceContext,
  ParamListContext,
  RalphParser,
  TxScriptContext,
  TypeStructBodyContext,
} from '../parser/RalphParser'
import { RalphParserVisitor } from '../parser/RalphParserVisitor'

import { Contract } from '../ast/contract'
import { Method } from '../ast/method'
import { Event } from '../ast/event'
import { Base } from '../ast/base'
import { Interface } from '../ast/interface'
import { TxScript } from '../ast/txScript'
import cache from '../cache/cache'
import { Context } from '../ast/context'
import { Enum } from '../ast/enum'
import { AssetScript } from '../ast/assetScript'
import { Identifier } from '../ast/identifier'
import { SemanticNode } from '../ast/ast'
import { RalphLexer } from '../parser/RalphLexer'

type Result = Base | Identifier | undefined

export class RalphVisitor extends AbstractParseTreeVisitor<Result> implements RalphParserVisitor<Result> {
  charStream: CodePointCharStream

  lexer: RalphLexer

  tokenStream: CommonTokenStream

  parser: RalphParser

  cache: Identifier[]

  uri: Uri

  constructor(uri: Uri, parser: RalphParser, lexer: RalphLexer, charStream: CodePointCharStream, tokenStream: CommonTokenStream) {
    super()
    this.charStream = charStream
    this.lexer = lexer
    this.tokenStream = tokenStream
    this.parser = parser
    this.uri = uri
    this.cache = []
  }

  protected defaultResult(): Result {
    return new SemanticNode()
  }

  visitBody(ctx: TypeStructBodyContext, base: Base) {
    const context = new Context(base)
    base.append(...context.statementContexts(ctx.statement()))
    // method
    ctx.methodDecl().forEach((method) => base.add(Method.FromContext(method).setParent(base)))
    // event
    ctx.event().forEach((eventCtx) => base.add(Event.FromContext(eventCtx).setParent(base)))
    ctx.enum().forEach((value) => base.add(Enum.FromContext(value).setParent(base)))
  }

  visitParams(ctx: ParamListContext | undefined, base: Base) {
    if (ctx) {
      const context = new Context(base)
      base.append(...context.paramListContext(ctx))
    }
  }

  visitStruct(ctx: Struct, base: Base): Result {
    base._parser = this.parser
    base.setRuleContext(ctx)
    base.uri = this.uri
    base._sourceIntervalDetail = ctx.sourceInterval.differenceNotProperlyContained(ctx.typeStructBody().sourceInterval)
    base.setParent(cache)
    base.setRange(ctx.start, ctx.stop)
    this.visitParams(ctx.paramList?.(), base)
    this.visitBody(ctx.typeStructBody?.(), base)
    this.cache.push(base)
    return base
  }

  visitContract(ctx: ContractContext): Result {
    const contract = new Contract(ctx.IDENTIFIER())
    const extendList = ctx.extends()
    if (extendList) this.visitExtendsContext(extendList, contract)
    const implementer = ctx.implements()
    if (implementer) this.visitImplementsContext(implementer, contract)
    return this.visitStruct(ctx, contract)
  }

  visitExtendsContext(ctx: ExtendsContext, contract: Contract) {
    ctx.contractExtends().forEach((value) => this.visitContractExtendsContext(value, contract))
  }

  visitContractExtendsContext(ctx: ContractExtendsContext, contract: Contract) {
    const block = new Context(contract)
    const identifier = ctx.IDENTIFIER()
    contract.append(block.typeNode(identifier))
    const parent = cache.get(identifier.symbol.text!)
    if (parent instanceof Contract) {
      contract.parentClass.set(parent.name!, parent)
      parent.subclass.set(contract.name!, contract)
      // todo fix
      Array.from(parent.members.values()).forEach((member) => contract.add(member))
    } else {
      contract.parentClass.set(identifier.symbol.text!, undefined)
    }
    const list = ctx.expressionList()
    if (list) {
      contract.append(...block.expressionListContext(list))
    }
  }

  visitImplementsContext(ctx: ImplementsContext, contract: Contract) {
    const identifier = ctx.IDENTIFIER()
    const block = new Context(contract)
    contract.append(block.typeNode(identifier))
    const parent = cache.get(identifier.symbol.text!)
    if (parent instanceof Interface) {
      contract.interfaces.set(parent.name!, parent)
      parent.implementer.set(contract.name!, contract)
      // todo fix
      Array.from(parent.members.values()).forEach((member) => contract.add(member))
    } else {
      contract.interfaces.set(identifier.symbol.text!, undefined)
    }
  }

  visitInterface(ctx: InterfaceContext): Result {
    return this.visitStruct(ctx, new Interface(ctx.IDENTIFIER(0)))
  }

  visitTxScript(ctx: TxScriptContext): Result {
    return this.visitStruct(ctx, new TxScript(ctx.IDENTIFIER()))
  }

  visitAssetScript(ctx: AssetScriptContext): Result {
    return this.visitStruct(ctx, new AssetScript(ctx.IDENTIFIER()))
  }
}

declare class Struct extends ParserRuleContext {
  paramList?(): ParamListContext | undefined

  typeStructBody(): TypeStructBodyContext
}

import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { Uri } from 'vscode'
import { CodePointCharStream } from 'antlr4ts/CodePointCharStream'
import { CommonTokenStream } from 'antlr4ts'
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext'
import {
  AssetScriptContext,
  ContractContext,
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
import { Root } from '../ast/root'

type Result = Base | Identifier | undefined

export class RalphVisitor extends AbstractParseTreeVisitor<Result> implements RalphParserVisitor<Result> {
  charStream: CodePointCharStream

  lexer: RalphLexer

  tokenStream: CommonTokenStream

  parser: RalphParser

  cache: Root

  uri: Uri

  constructor(uri: Uri, parser: RalphParser, lexer: RalphLexer, charStream: CodePointCharStream, tokenStream: CommonTokenStream) {
    super()
    this.charStream = charStream
    this.lexer = lexer
    this.tokenStream = tokenStream
    this.parser = parser
    this.uri = uri
    this.cache = cache
  }

  protected defaultResult(): Result {
    return new SemanticNode()
  }

  visitBody(ctx: TypeStructBodyContext, base: Base) {
    // method
    ctx.methodDecl().forEach((method) => base.add(Method.FromContext(method).setParent(base)))
    // event
    ctx.event().forEach((eventCtx) => base.add(new Event(eventCtx.IDENTIFIER()).setParent(base).setRuleContext(eventCtx)))
    const context = new Context(base)
    base.append(...context.statementContexts(ctx.statement()))
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
    base.ruleContext = ctx
    base.uri = this.uri
    base._sourceInterval = ctx.sourceInterval.differenceNotProperlyContained(ctx.typeStructBody().sourceInterval)
    base.setParent(new Root())
    base.setRange(ctx.start, ctx.stop)
    this.visitParams(ctx.paramList?.(), base)
    this.visitBody(ctx.typeStructBody?.(), base)
    this.cache.add(base)
    return base
  }

  visitContract(ctx: ContractContext): Result {
    const contract = new Contract(ctx.IDENTIFIER(0))
    const block = new Context(contract)
    if (ctx.EXTENDS()) {
      const identifier = ctx.IDENTIFIER(1)
      contract.append(block.typeNode(identifier))
      const base = cache.get(identifier.symbol.text!)
      if (base instanceof Contract) {
        contract.parentClass = base
        base.subclass.set(contract.name!, contract)
      }
    }
    if (ctx.IMPLEMENTS()) {
      const identifier = ctx.IDENTIFIER(1)
      contract.append(block.typeNode(identifier))
      const base = cache.get(identifier.symbol.text!)
      if (base instanceof Interface) {
        contract.interfaces = base
        base.implementer?.set(contract.name!, contract)
      }
    }
    const list = ctx.expressionList()
    if (list) {
      contract.append(...block.expressionListContext(list))
    }
    return this.visitStruct(ctx, contract)
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

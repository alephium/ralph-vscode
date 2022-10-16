import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { Uri } from 'vscode'
import {
  AssetScriptContext,
  ContractContext,
  InterfaceContext,
  ParamListContext,
  TxScriptContext,
  TypeStructBodyContext,
} from '../parser/RalphParser'
import { RalphParserVisitor } from '../parser/RalphParserVisitor'

import { Contract } from '../ast/contract'
import { Field } from '../ast/field'
import { Method } from '../ast/method'
import { Event } from '../ast/event'
import { Base } from '../ast/base'
import { Interface } from '../ast/interface'
import { TxScript } from '../ast/txScript'
import cache from '../cache/cache'
import { statementContext } from '../ast/context'
import { Enum } from '../ast/enum'
import { AssetScript } from '../ast/assetScript'
import { Identifier } from '../ast/identifier'
import { SemanticNode } from '../ast/ast'

type Result = Identifier | undefined

export class RalphVisitor extends AbstractParseTreeVisitor<Result> implements RalphParserVisitor<Result> {
  cache!: Map<string, Base>

  uri: Uri

  constructor(uri: Uri) {
    super()
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
    ctx.event().forEach((eventCtx) => {
      const event = new Event(eventCtx.IDENTIFIER())
      event.detail = eventCtx.text
      event.setParent(base)
      base.add(event)
    })

    ctx.statement().forEach((value) => base.append(statementContext(value)))
    ctx.enum().forEach((value) => base.add(Enum.FromContext(value).setParent(base)))
  }

  visitParams(ctx?: ParamListContext, base?: Base) {
    ctx?.param().forEach((field) => base?.add(Field.FromContext(field).setParent(base)))
  }

  visitStruct(ctx: Struct, base: Base): Result {
    base.detail = ctx.text
    base.uri = this.uri
    base.range(ctx.typeStructBody().L_CURLY().symbol, ctx.typeStructBody().R_CURLY().symbol)
    this.visitParams(ctx.paramList?.(), base)
    this.visitBody(ctx.typeStructBody!(), base)
    this.cache.set(base.name!, base)
    return base
  }

  visitContract(ctx: ContractContext): Result {
    return this.visitStruct(ctx, new Contract(ctx.IDENTIFIER(0)))
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

interface Struct {
  paramList?(): ParamListContext | undefined
  typeStructBody(): TypeStructBodyContext
  get text(): string
}

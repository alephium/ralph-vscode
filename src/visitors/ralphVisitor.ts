import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { Uri } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
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
    return new SemanticNode('root')
  }

  visitBody(ctx: TypeStructBodyContext, base: Base) {
    // method
    ctx.methodDecl().forEach((method) => base.add(Method.FromContext(method).setParent(base)))
    // event
    ctx.event().forEach((eventCtx) => {
      const event = new Event(eventCtx.IDENTIFIER().text, eventCtx.IDENTIFIER().symbol)
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

  visitContract(ctx: ContractContext): Result {
    const contact = new Contract(ctx.IDENTIFIER(0).text, ctx.IDENTIFIER(0).symbol)
    contact.detail = ctx.text
    contact.uri = this.uri
    contact.range(ctx.IDENTIFIER(0).symbol, ctx.typeStructBody().R_CURLY().symbol)

    // fields
    this.visitParams(ctx.paramList(), contact)
    this.visitBody(ctx.typeStructBody(), contact)
    this.cache.set(contact.name, contact)
    return contact
  }

  visitInterface(ctx: InterfaceContext): Result {
    const face = new Interface(ctx.IDENTIFIER(0).text, ctx.IDENTIFIER(0).symbol)
    face.detail = ctx.text
    face.uri = this.uri
    face.range(ctx.IDENTIFIER(0).symbol, ctx.typeStructBody().R_CURLY().symbol)
    this.visitBody(ctx.typeStructBody(), face)
    this.cache.set(face.name, face)
    return face
  }

  visitScript(ctx: Script, base: Base): Result {
    base.detail = ctx.text
    base.uri = this.uri
    base.range(ctx.IDENTIFIER().symbol, ctx.typeStructBody().R_CURLY().symbol)
    this.visitParams(ctx.paramList?.(), base)
    this.visitBody(ctx.typeStructBody!(), base)
    this.cache.set(base.name, base)
    return base
  }

  visitTxScript(ctx: TxScriptContext): Result {
    const script = new TxScript(ctx.IDENTIFIER().text, ctx.IDENTIFIER().symbol)
    return this.visitScript(ctx, script)
  }

  visitAssetScript(ctx: AssetScriptContext): Result {
    const script = new AssetScript(ctx.IDENTIFIER().text, ctx.IDENTIFIER().symbol)
    return this.visitScript(ctx, script)
  }
}

interface Script {
  IDENTIFIER(): TerminalNode
  paramList?(): ParamListContext | undefined
  typeStructBody(): TypeStructBodyContext
  get text(): string
}

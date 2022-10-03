import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { Uri } from 'vscode'
import { ContractContext, InterfaceContext, ParamListContext, TxScriptContext, TypeStructBodyContext } from '../parser/RalphParser'
import { RalphParserVisitor } from '../parser/RalphParserVisitor'

import { Contract } from '../ast/contract'
import { Field } from '../ast/field'
import { Method } from '../ast/method'
import { Event } from '../ast/event'
import { Base } from '../ast/base'
import { Interface } from '../ast/interface'
import { TxScript } from '../ast/txScript'
import cache from '../cache/cache'

export class RalphVisitor extends AbstractParseTreeVisitor<number> implements RalphParserVisitor<number> {
  cache!: Map<string, Base>

  uri: Uri

  constructor(uri: Uri) {
    super()
    this.uri = uri
    this.cache = cache
  }

  protected defaultResult(): number {
    return this.cache.size
  }

  visitBody(ctx: TypeStructBodyContext, base: Base) {
    // method
    ctx.methodDecl().forEach((method) => base.add(Method.FromContext(method)))
    // event
    ctx.event().forEach((eventCtx) => {
      const event = new Event(eventCtx.IDENTIFIER().text, eventCtx.IDENTIFIER().symbol)
      event.detail = eventCtx.text
      event.setParent(base)
      base.add(event)
    })
    // // emit
    // ctx.emit().forEach((emitCtx) => {
    //   const emit = new Emit(emitCtx.IDENTIFIER().text, emitCtx.IDENTIFIER().symbol)
    //   emit.detail = emitCtx.text
    //   emit.setParent(base)
    //   base.add(emit)
    // })
  }

  visitParams(ctx?: ParamListContext, base?: Base) {
    ctx?.param().forEach((field) => base?.add(Field.FromContext(field).setParent(base)))
  }

  visitContract(ctx: ContractContext): number {
    const contact = new Contract(ctx.IDENTIFIER(0).text, ctx.IDENTIFIER(0).symbol)
    contact.detail = ctx.text
    contact.uri = this.uri
    contact.range(ctx.IDENTIFIER(0).symbol, ctx.typeStructBody().R_CURLY().symbol)

    // fields
    this.visitParams(ctx.paramList(), contact)
    this.visitBody(ctx.typeStructBody(), contact)
    this.cache.set(contact.name, contact)
    return this.cache.size
  }

  visitInterface(ctx: InterfaceContext): number {
    const face = new Interface(ctx.IDENTIFIER().text, ctx.IDENTIFIER().symbol)
    face.detail = ctx.text
    face.uri = this.uri
    face.range(ctx.IDENTIFIER().symbol, ctx.typeStructBody().R_CURLY().symbol)
    this.visitBody(ctx.typeStructBody(), face)
    this.cache.set(face.name, face)
    return this.cache.size
  }

  visitTxScript(ctx: TxScriptContext): number {
    const script = new TxScript(ctx.IDENTIFIER().text, ctx.IDENTIFIER().symbol)
    script.detail = ctx.text
    script.uri = this.uri
    script.range(ctx.IDENTIFIER().symbol, ctx.typeStructBody().R_CURLY().symbol)
    this.visitParams(ctx.paramList(), script)
    this.visitBody(ctx.typeStructBody(), script)
    this.cache.set(script.name, script)
    return this.cache.size
  }
}

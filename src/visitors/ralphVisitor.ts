import * as vscode from 'vscode'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import {
  ContractContext,
  IdentifierListContext,
  InterfaceContext,
  MethodDeclContext,
  ParamListContext,
  TxScriptContext,
  TypeStructBodyContext,
  VarDeclContext,
} from '../parser/RalphParser'
import { RalphParserVisitor } from '../parser/RalphParserVisitor'

import { Contract } from '../meta/contract'
import { Field } from '../meta/field'
import { Method } from '../meta/method'
import { Event } from '../meta/event'
import { Emit } from '../meta/emit'
import { Base } from '../meta/base'
import { Interface } from '../meta/interface'
import { TxScript } from '../meta/txScript'

export class RalphVisitor extends AbstractParseTreeVisitor<number> implements RalphParserVisitor<number> {
  structs!: Map<string, Base>

  constructor() {
    super()
    this.structs = new Map()
  }

  protected defaultResult(): number {
    return this.structs.size
  }

  DocumentSymbol(document: vscode.TextDocument): vscode.SymbolInformation[] {
    let items: vscode.SymbolInformation[] = []
    this.structs.forEach((contract) => {
      items = items.concat(contract.DocumentSymbol(document))
    })
    return items
  }

  visitBody(ctx: TypeStructBodyContext, base: Base) {
    // method
    ctx.methodDecl().forEach((method) => base.addMember(Method.FromContext(method)))
    // event
    ctx.event().forEach((eventCtx) => {
      const event = new Event(eventCtx.IDENTIFIER().text, eventCtx.IDENTIFIER().symbol)
      event.detail = eventCtx.text
      base.addMember(event)
    })
    // emit
    ctx.emit().forEach((emitCtx) => {
      const emit = new Emit(emitCtx.IDENTIFIER().text, emitCtx.IDENTIFIER().symbol)
      emit.detail = emitCtx.text
      base.addMember(emit)
    })
  }

  visitParams(ctx?: ParamListContext, base?: Base) {
    ctx?.param().forEach((field) => base?.addMember(new Field(field.IDENTIFIER().text, field.IDENTIFIER().symbol)))
  }

  visitContract(ctx: ContractContext): number {
    const contact = new Contract(ctx.IDENTIFIER(0).text, ctx.IDENTIFIER(0).symbol)
    contact.Scope(ctx.IDENTIFIER(0).symbol, ctx.typeStructBody().R_CURLY().symbol)

    // fields
    this.visitParams(ctx.paramList(), contact)
    this.visitBody(ctx.typeStructBody(), contact)
    this.structs.set(contact.name, contact)
    return this.structs.size
  }

  visitInterface(ctx: InterfaceContext): number {
    const face = new Interface(ctx.IDENTIFIER().text, ctx.IDENTIFIER().symbol)
    face.Scope(ctx.IDENTIFIER().symbol, ctx.typeStructBody().R_CURLY().symbol)
    this.visitBody(ctx.typeStructBody(), face)
    this.structs.set(face.name, face)
    return this.structs.size
  }

  visitTxScript(ctx: TxScriptContext): number {
    const script = new TxScript(ctx.IDENTIFIER().text, ctx.IDENTIFIER().symbol)
    script.Scope(ctx.IDENTIFIER().symbol, ctx.typeStructBody().R_CURLY().symbol)
    this.visitParams(ctx.paramList(), script)
    this.visitBody(ctx.typeStructBody(), script)
    this.structs.set(script.name, script)
    return this.structs.size
  }
}

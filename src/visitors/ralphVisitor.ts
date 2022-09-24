import * as vscode from 'vscode'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ContractContext, InterfaceContext, ParamListContext, TxScriptContext, TypeStructBodyContext } from '../parser/RalphParser'
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
    ctx.methodDecl().forEach((method) => {
      base.addMember(new Method(method.IDENTIFIER().text, method.IDENTIFIER().symbol))
    })
    // event
    ctx.event().forEach((event) => base.addMember(new Event(event.IDENTIFIER().text, event.IDENTIFIER().symbol)))
    // emit
    ctx.emit().forEach((emit) => base.addMember(new Emit(emit.IDENTIFIER().text, emit.IDENTIFIER().symbol)))
  }

  visitParams(ctx?: ParamListContext, base?: Base) {
    ctx?.param().forEach((field) => base?.addMember(new Field(field.IDENTIFIER().text, field.IDENTIFIER().symbol)))
  }

  visitContract(ctx: ContractContext): number {
    const contact = new Contract(ctx.IDENTIFIER(0).text, ctx.IDENTIFIER(0).symbol)
    // fields
    this.visitParams(ctx.paramList(), contact)
    this.visitBody(ctx.typeStructBody(), contact)
    this.structs.set(contact.name, contact)
    return this.structs.size
  }

  visitInterface(ctx: InterfaceContext): number {
    const face = new Interface(ctx.IDENTIFIER().text, ctx.IDENTIFIER().symbol)
    this.visitBody(ctx.typeStructBody(), face)
    this.structs.set(face.name, face)
    return this.structs.size
  }

  visitTxScript(ctx: TxScriptContext): number {
    const script = new TxScript(ctx.IDENTIFIER().text, ctx.IDENTIFIER().symbol)
    this.visitParams(ctx.paramList(), script)
    this.visitBody(ctx.typeStructBody(), script)
    this.structs.set(script.name, script)
    return this.structs.size
  }
}

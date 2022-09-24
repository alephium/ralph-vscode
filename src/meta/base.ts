import { Token } from 'antlr4ts/Token'
import * as vscode from 'vscode'
import { SymbolKind } from 'vscode'
import { Ast, IAst } from './ast'

export class Base extends Ast implements VscodeInterface {
  members?: IAst[]

  constructor(name: string, token: Token) {
    super(name, token)
    this.members = []
  }

  addMember(ast: IAst) {
    this.members?.push(ast)
  }

  DocumentSymbol(document: vscode.TextDocument): vscode.SymbolInformation[] {
    const items: vscode.SymbolInformation[] = []
    this.members?.forEach((member) => {
      items.push(
        new vscode.SymbolInformation(
          member.name,
          <SymbolKind>member.kind?.(),
          this.name,
          new vscode.Location(document.uri, member.Position())
        )
      )
    })
    items.push(new vscode.SymbolInformation(this.name, SymbolKind.Class, '', new vscode.Location(document.uri, this.Position())))
    return items
  }
}

export interface VscodeInterface {
  DocumentSymbol?(document: vscode.TextDocument): vscode.SymbolInformation[]
}

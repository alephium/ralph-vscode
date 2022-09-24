import { Token } from 'antlr4ts/Token'

import * as vscode from 'vscode'
import { SymbolKind } from 'vscode'

export class Ast implements IAst {
  readonly name!: string

  readonly token!: Token

  constructor(name: string, token: Token) {
    this.token = token
    this.name = name
  }

  Position(): vscode.Position {
    return new vscode.Position(this.token.line - 1, this.token.charPositionInLine)
  }
}

export interface IAst {
  Position(): vscode.Position

  name: string

  token: Token

  kind?: () => SymbolKind
}

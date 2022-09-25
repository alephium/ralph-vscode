import { Token } from 'antlr4ts/Token'

import * as vscode from 'vscode'
import { Range, SymbolKind, Uri } from 'vscode'
import { Identifier } from './identifier'

export class Ast implements IAst {
  readonly name: string

  readonly token: Token

  uri: Uri | undefined

  scope: Range | undefined

  detail: string

  constructor(name: string, token: Token) {
    this.token = token
    this.name = name
    this.detail = ''
  }

  Position(): vscode.Position {
    return this.ToPosition(this.token)
  }

  ToPosition(token: Token): vscode.Position {
    return new vscode.Position(token.line, token.charPositionInLine)
  }

  Scope(begin: Token, end: Token | undefined) {
    this.scope = new vscode.Range(this.ToPosition(begin), this.ToPosition(end ?? begin))
  }

  find(identifier: Identifier): IAst | undefined {
    if (this.contains(identifier)) {
      if (identifier.word === this.name) return this
    }
    return undefined
  }

  contains(identifier: Identifier): boolean {
    if (this.uri && identifier.uri) {
      if (this.uri.path !== identifier.uri.path) {
        return false
      }
    }
    if (this.scope) {
      return this.scope.contains(identifier.point)
    }
    return false
  }
}

export interface IAst {
  Position(): vscode.Position

  name: string

  token: Token

  kind?: () => SymbolKind

  detail?: string

  uri?: Uri

  scope?: Range

  find?(identifier: Identifier): IAst | undefined

  contains?(identifier: Identifier): boolean
}

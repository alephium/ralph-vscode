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
    this.detail = name
  }

  position(): vscode.Position {
    return this.convert(this.token)
  }

  convert(token: Token): vscode.Position {
    return new vscode.Position(token.line, token.charPositionInLine)
  }

  range(begin: Token, end: Token | undefined) {
    this.scope = new vscode.Range(this.convert(begin), this.convert(end ?? begin))
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
  position(): vscode.Position

  name: string

  token: Token

  kind?: () => SymbolKind

  detail?: string

  uri?: Uri

  scope?: Range

  find?(identifier: Identifier): IAst | undefined

  contains?(identifier: Identifier): boolean
}

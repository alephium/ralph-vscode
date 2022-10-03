import { Token } from 'antlr4ts/Token'
import { Position, Range, SymbolKind, Uri } from 'vscode'
import * as vscode from 'vscode'
import MapKinds from '../util/kind'
import { ActionKind, Identifier, IdentifierKind } from './identifier'

export class Ast implements Identifier {
  name: string

  identifierKind?: IdentifierKind

  action: ActionKind | undefined

  kind: number | undefined

  token: Token | undefined

  detail: string

  point: Position

  uri: Uri | undefined

  /** * action scope ** */
  scope: Range | undefined

  parent: Identifier | undefined

  symbolKind(): SymbolKind {
    return MapKinds().get(this.kind!)!
  }

  identifier(): Identifier {
    return this
  }

  constructor(name: string, token: Position | Token) {
    this.name = name
    this.detail = name
    if (token instanceof Position) {
      this.point = token
    } else {
      this.token = token
      this.point = this.convert(token)
      this.range(token, token)
    }
  }

  convert(token: Token): vscode.Position {
    return new vscode.Position(token.line - 1, token.charPositionInLine)
  }

  range(begin: Token, end: Token | undefined) {
    this.scope = new vscode.Range(this.convert(begin), this.convert(end ?? begin))
  }

  findOne(identifier: Identifier): Identifier | undefined {
    if (this.contains(identifier)) {
      if (identifier.name === this.name) return this
    }
    return undefined
  }

  findAll(identifier: Identifier): Identifier[] | undefined {
    const one = this.findOne(identifier)
    if (one) {
      return [one]
    }
    return one
  }

  contains(identifier: Identifier): boolean {
    this.uri = this.getUri()
    if (this.uri && identifier.uri) {
      if (this.uri.path !== identifier.uri.path) {
        return false
      }
    }
    if (this.scope) {
      return this.scope.contains(identifier.point!)
    }
    return false
  }

  toString(): string {
    return `name: ${this.name},
            detail: ${this.detail}, 
            uri?.path: ${this.getUri()?.path ?? ''},
            scope?.start.line: ${this.scope?.start.line ?? 0},
            scope?.end.line: ${this.scope?.end.line ?? 0}
            `
  }

  setParent(parent: Identifier): Identifier {
    this.parent = parent
    return this
  }

  setIdentifierKind(identifierKind: IdentifierKind): Identifier {
    this.identifierKind = identifierKind
    return this
  }

  setAction(action: ActionKind): Identifier {
    this.action = action
    return this
  }

  getUri(): Uri | undefined {
    if (this.uri) {
      return this.uri
    }
    return this.parent?.getUri?.()
  }

  word(): string {
    return this.name
  }
}

import { Token } from 'antlr4ts/Token'

import * as vscode from 'vscode'
import { Position, Range, SymbolKind, Uri } from 'vscode'
import { RuleContext } from 'antlr4ts/RuleContext'
import { Identifier } from './identifier'

export class Ast implements IAst {
  readonly name: string

  readonly token: Token

  detail: string

  uri: Uri | undefined

  point: Position

  /** * action scope ** */
  scope: Range | undefined

  parent: IAst | undefined

  constructor(name: string, token: Token) {
    this.token = token
    this.name = name
    this.detail = name
    this.point = this.convert(token)
    this.range(token, token)
  }

  position(): vscode.Position {
    return this.convert(this.token)
  }

  convert(token: Token): vscode.Position {
    return new vscode.Position(token.line - 1, token.charPositionInLine)
  }

  range(begin: Token, end: Token | undefined) {
    this.scope = new vscode.Range(this.convert(begin), this.convert(end ?? begin))
  }

  findOne(identifier: Identifier): IAst | undefined {
    if (this.contains(identifier)) {
      if (identifier.name === this.name) return this
    }
    return undefined
  }

  findAll(identifier: Identifier): IAst[] | undefined {
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
      return this.scope.contains(identifier.point)
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

  setParent(parent: IAst): IAst {
    this.parent = parent
    return this
  }

  getUri(): Uri | undefined {
    if (this.uri) {
      return this.uri
    }
    return this.parent?.getUri?.()
  }

  identifier(): Identifier {
    return new Identifier(this.name, this.point, this.getUri())
  }
}

export interface IAst {
  name: string

  token?: Token

  detail?: string

  uri?: Uri

  scope?: Range

  parent?: IAst

  kind?: () => SymbolKind

  position(): vscode.Position

  findOne?(identifier: Identifier): IAst | undefined

  findAll?(identifier: Identifier): IAst[] | undefined

  contains?(identifier: Identifier): boolean

  toString?(): string

  setParent?(parent: IAst): ThisType<IAst>

  getChild?(): IAst[]

  getUri?(): Uri | undefined

  identifier(): Identifier
}

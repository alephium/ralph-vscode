import { Token } from 'antlr4ts/Token'
import * as vscode from 'vscode'
import { CompletionItemLabel, Position, Range, SymbolKind, Uri } from 'vscode'
import MapKinds from '../util/kind'
import { Identifier, IdentifierKind, SemanticsKind } from './identifier'
import { Word } from './word'

export class SemanticNode implements Identifier {
  name: string

  identifierKind?: IdentifierKind

  semanticsKind: SemanticsKind | undefined

  kind: number | undefined

  token: Token | undefined

  detail: string

  point: Position | undefined

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

  constructor(name: string, token?: Position | Token) {
    this.name = name
    this.detail = name
    this.semanticsKind = SemanticsKind.Def
    if (token) {
      if (token instanceof Position) {
        this.point = token
      } else {
        this.token = token
        this.point = this.convert(token)
        this.range(token, token)
      }
    }
  }

  convert(token: Token): vscode.Position {
    return new vscode.Position(token.line - 1, token.charPositionInLine)
  }

  range(begin: Token, end: Token | undefined) {
    this.scope = new vscode.Range(this.convert(begin), this.convert(end ?? begin))
  }

  findOne(condition: Word): Identifier | undefined {
    if (this.isScope(condition)) {
      if (condition.name === this.name) return this
    }
    return undefined
  }

  findAll(condition: Word): Identifier[] | undefined {
    const one = this.findOne(condition)
    if (one) {
      return [one]
    }
    return one
  }

  find(condition: Word): Identifier[] | undefined {
    if (this.isScope(condition)) {
      if (condition.name === this.name) return [this]
    }
    return undefined
  }

  container(identifier?: Identifier): Identifier | undefined {
    if (identifier) {
      if (this.isScope(identifier)) {
        return this.parent
      }
      return undefined
    }
    return this.parent
  }

  isDef(): boolean {
    return this.semanticsKind === SemanticsKind.Def
  }

  isRef(): boolean {
    return this.semanticsKind === SemanticsKind.Ref
  }

  isScope(identifier: Identifier): boolean {
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

  setParent(parent: Word): Identifier {
    this.parent = parent
    return this
  }

  setIdentifierKind(identifierKind: IdentifierKind): Identifier {
    this.identifierKind = identifierKind
    return this
  }

  setSemanticsKind(kind: SemanticsKind): Identifier {
    this.semanticsKind = kind
    return this
  }

  getUri(): Uri | undefined {
    if (this.uri) {
      return this.uri
    }
    return this.parent?.getUri?.()
  }

  completionItemLabel(): CompletionItemLabel {
    return {
      label: this.name,
      detail: this.detail,
      description: this.detail,
    }
  }
}

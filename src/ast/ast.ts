import { Token } from 'antlr4ts/Token'
import * as vscode from 'vscode'
import { CompletionItem, CompletionItemKind, CompletionItemLabel, DocumentSymbol, Range, SymbolKind, Uri } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import MapKinds from '../util/kind'
import { Identifier, IdentifierKind, SemanticsKind } from './identifier'
import { Word } from './word'
import { Position } from './position'

export class SemanticNode implements Identifier {
  name: string | undefined

  identifierKind: IdentifierKind | undefined

  semanticsKind: SemanticsKind | undefined

  kind: number | undefined

  detail: string | undefined

  point: vscode.Position | undefined

  uri: Uri | undefined

  /** * action scope ** */
  scope: Range | undefined

  parent: Identifier | undefined

  constructor(node?: TerminalNode) {
    if (node) {
      this.name = node.symbol.text!
      this.detail = this.name
      this.semanticsKind = SemanticsKind.Def
      this.identifierKind = IdentifierKind.Type
      this.range(node.symbol, node.symbol)
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

  container(position?: Position): Identifier | undefined {
    if (position) {
      if (this.isScope(position)) {
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

  isScope(position: Position): boolean {
    this.uri = this.getUri()
    if (this.uri && position.uri) {
      if (this.uri.path !== position.uri.path) {
        return false
      }
    }
    if (this.scope) {
      return this.scope.contains(position.point!)
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

  setParent(parent: Identifier): this {
    this.parent = parent
    return this
  }

  setIdentifierKind(identifierKind: IdentifierKind): this {
    this.identifierKind = identifierKind
    return this
  }

  setSemanticsKind(kind: SemanticsKind): this {
    this.semanticsKind = kind
    return this
  }

  getUri(): Uri | undefined {
    if (this.uri) {
      return this.uri
    }
    return this.parent?.getUri?.()
  }

  symbolKind(): SymbolKind {
    return MapKinds().get(this.kind!)!
  }

  completionItemLabel(): CompletionItemLabel {
    return {
      label: this.name!,
      detail: this.label(),
      description: this.detail,
    }
  }

  label(): string {
    return this.name ?? 'undefined'
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Variable
  }

  documentSymbol(): DocumentSymbol {
    return new DocumentSymbol(this.label(), this.detail!, this.symbolKind(), this.scope!, this.scope!)
  }

  completionItem(): CompletionItem {
    return new CompletionItem(this.completionItemLabel(), this.completionItemKind())
  }
}

import { Token } from 'antlr4ts/Token'
import * as vscode from 'vscode'
import {
  CompletionItem,
  CompletionItemKind,
  CompletionItemLabel,
  DocumentSymbol,
  Hover,
  Location,
  MarkdownString,
  Range,
  SymbolKind,
  Uri,
} from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import MapKinds from '../util/kind'
import { Identifier } from './identifier'
import { Word } from './word'
import { Position } from './position'
import { IdentifierKind, SemanticsKind } from './kinder'

export class SemanticNode implements Identifier {
  name: string | undefined

  identifierKind: IdentifierKind | undefined

  semanticsKind: SemanticsKind | undefined

  kind: number | undefined

  detail: string | undefined

  point: vscode.Position | undefined

  uri: Uri | undefined

  /** * action scope ** */
  range: Range | undefined

  parent: Identifier | undefined

  constructor(node?: TerminalNode) {
    if (node) {
      this.name = node.symbol.text!
      this.detail = this.name
      this.semanticsKind = SemanticsKind.Def
      this.identifierKind = IdentifierKind.Type
      this.setRange(node.symbol, node.symbol)
    }
  }

  convert(token: Token): vscode.Position {
    return new vscode.Position(token.line - 1, token.charPositionInLine)
  }

  setRange(begin: Token, end: Token | undefined): this {
    this.range = new vscode.Range(this.convert(begin), this.convert(end ?? begin))
    return this
  }

  findAll(condition: Word): Identifier[] | undefined {
    if (this.contains(condition)) {
      if (condition.name === this.name) return [this]
    }
    return undefined
  }

  find(condition: Word): Identifier[] | undefined {
    if (this.contains(condition)) {
      if (condition.name === this.name) return [this]
    }
    return undefined
  }

  container(position: Position): Identifier | undefined {
    if (this.contains(position)) {
      return this.parent
    }
    return undefined
  }

  isDef(): boolean {
    return this.semanticsKind === SemanticsKind.Def
  }

  isRef(): boolean {
    return this.semanticsKind === SemanticsKind.Ref
  }

  contains(position: Position): boolean {
    this.uri = this.getUri()
    if (this.uri && position.uri) {
      if (this.uri.path !== position.uri.path) {
        return false
      }
    }
    if (this.range) {
      return this.range.contains(position.point!)
    }
    return false
  }

  toString(): string {
    return `name: ${this.name},
            detail: ${this.detail}, 
            uri?.path: ${this.getUri()?.path ?? ''},
            scope?.start.line: ${this.range?.start.line ?? 0},
            scope?.end.line: ${this.range?.end.line ?? 0}
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

  getChild(): Identifier[] {
    return []
  }

  defs(): Identifier[] | undefined {
    return undefined
  }

  ref(): Identifier[] | undefined {
    return undefined
  }

  def(word: Word): Identifier | undefined {
    if (this.isDef() && word.name === this.name) {
      return this
    }
    return undefined
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
    return new DocumentSymbol(this.label(), this.detail!, this.symbolKind(), this.range!, this.range!)
  }

  completionItem(): CompletionItem {
    return new CompletionItem(this.completionItemLabel(), this.completionItemKind())
  }

  hover(): Hover {
    const value = new MarkdownString()
    value.appendMarkdown(`
    ${this.name}
    ${this.detail}
    `)
    return new vscode.Hover(value)
  }

  location(): Location {
    return new Location(this.getUri()!, this.range!.start)
  }
}

import * as vscode from 'vscode'
import {
  CompletionItem,
  CompletionItemKind,
  CompletionItemLabel,
  DocumentSymbol,
  Hover,
  Location,
  SignatureInformation,
  SymbolInformation,
  SymbolKind,
  TypeHierarchyItem,
} from 'vscode'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { Kinder, IdentifierKind, SemanticsKind } from './kinder'
// eslint-disable-next-line import/no-cycle
import { Finder } from './finder'
import { Position } from './position'
import { RalphParser } from '../parser/RalphParser'

export interface IntelliSense {
  symbolKind?(): SymbolKind
  completionItemKind?(): CompletionItemKind
  completionItemLabel?(): CompletionItemLabel
  documentSymbol?(): DocumentSymbol
  symbolInformation?(): SymbolInformation
  completionItem?(): CompletionItem
  signatureInformation?(): SignatureInformation
  hover?(): Hover
  location?(): Location
  typeHierarchyItem?(): TypeHierarchyItem
}

export interface Identifier extends Kinder, Finder, Position, IntelliSense {
  name?: string

  range?: vscode.Range

  detail?: string

  ruleContext?: RuleNode

  parent?: Identifier

  type_?: Identifier

  keyword?(): string

  toString?(): string

  contains?(identifier: Position): boolean

  isDef?(): boolean

  isRef?(): boolean

  getUri?(): vscode.Uri | undefined

  getChild?(): Identifier[]

  getType?(): Identifier | undefined

  setParent?(parent: Identifier): this

  setSemanticsKind?(kind: SemanticsKind): this

  setIdentifierKind?(kind: IdentifierKind): this

  add?(member: Identifier): void

  append?(...identifiers: Identifier[]): void

  label?(): string

  parser?(): RalphParser | undefined

  getWordRange?(): vscode.Range | undefined
}

import { Token } from 'antlr4ts/Token'
import { CompletionItemLabel, Range, Uri } from 'vscode'
import { Kinder } from './kinder'
// eslint-disable-next-line import/no-cycle
import { Finder } from './finder'
import { Position } from './position'

export enum IdentifierKind {
  Variable = 0,
  Method = 1,
  Event = 2,
  Type = 3,
}

export enum SemanticsKind {
  Ref = 0,
  Def = 1,
}

export interface Identifier extends Kinder, Finder, Position {
  name: string

  identifierKind?: IdentifierKind

  semanticsKind?: SemanticsKind

  scope?: Range

  token?: Token

  detail?: string

  parent?: Identifier

  type_?: Identifier

  keyword?(): string

  toString?(): string

  isScope?(identifier: Position): boolean

  isDef?(): boolean

  isRef?(): boolean

  getUri?(): Uri | undefined

  getChild?(): Identifier[]

  getType?(): Identifier | undefined

  identifier?(): Identifier

  setParent?(parent: Identifier): this

  setSemanticsKind?(kind: SemanticsKind): this

  setIdentifierKind?(kind: IdentifierKind): this

  completionItemLabel?(): CompletionItemLabel
}

import { Token } from 'antlr4ts/Token'
import { CompletionItemLabel, Position, Range, Uri } from 'vscode'
import { Kinder } from './kinder'
// eslint-disable-next-line import/no-cycle
import { Finder } from './finder'

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

export interface Identifier extends Kinder, Finder {
  name: string

  identifierKind?: IdentifierKind

  semanticsKind?: SemanticsKind

  uri?: Uri

  point?: Position

  scope?: Range

  token?: Token

  detail?: string

  parent?: Identifier

  type_?: Identifier

  keyword?(): string

  toString?(): string

  isScope?(identifier: Identifier): boolean

  isDef?(): boolean

  isRef?(): boolean

  getUri?(): Uri | undefined

  getChild?(): Identifier[]

  getType?(): Identifier

  identifier?(): ThisType<Identifier>

  setParent?(parent: Identifier): ThisType<Identifier>

  setSemanticsKind?(kind: SemanticsKind): ThisType<Identifier>

  completionItemLabel?(): CompletionItemLabel
}

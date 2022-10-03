import { Token } from 'antlr4ts/Token'
import { CompletionItemKind, Position, Range, SymbolKind, Uri } from 'vscode'

export enum IdentifierKind {
  Variable = 0,
  Method = 1,
  Event = 2,
  Type = 3,
}

export enum ActionKind {
  Def = 0,
  Use = 1,
}

export interface Identifier {
  name: string

  identifierKind?: IdentifierKind

  action?: ActionKind

  token?: Token

  detail?: string

  parent?: Identifier

  point?: Position

  uri?: Uri

  scope?: Range

  symbolKind?(): SymbolKind

  completionItemKind?(): CompletionItemKind

  findOne?(identifier: Identifier): Identifier | undefined

  findAll?(identifier: Identifier): Identifier[] | undefined

  contains?(identifier: Identifier): boolean

  toString?(): string

  getChild?(): Identifier[]

  getUri?(): Uri | undefined

  identifier?(): ThisType<Identifier>

  setParent?(parent: Identifier): ThisType<Identifier>

  setAction?(action: ActionKind): ThisType<Identifier>
}

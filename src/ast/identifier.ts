import * as vscode from 'vscode'
import { IntelliSense, Kinder } from './kinder'
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

export interface Identifier extends Kinder, Finder, Position, IntelliSense {
  name?: string

  identifierKind?: IdentifierKind

  semanticsKind?: SemanticsKind

  scope?: vscode.Range

  detail?: string

  parent?: Identifier

  type_?: Identifier

  keyword?(): string

  toString?(): string

  isScope?(identifier: Position): boolean

  isDef?(): boolean

  isRef?(): boolean

  getUri?(): vscode.Uri | undefined

  getChild?(): Identifier[]

  getType?(): Identifier | undefined

  setParent?(parent: Identifier): this

  setSemanticsKind?(kind: SemanticsKind): this

  setIdentifierKind?(kind: IdentifierKind): this

  add?(member: Identifier): void

  append?(identifiers: Identifier[]): void

  label?(): string
}

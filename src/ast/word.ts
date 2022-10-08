import { Position, Uri } from 'vscode'
import { IdentifierKind, SemanticsKind } from './identifier'

export interface Word {
  name: string

  uri?: Uri

  point?: Position

  identifierKind?: IdentifierKind

  semanticsKind?: SemanticsKind
}

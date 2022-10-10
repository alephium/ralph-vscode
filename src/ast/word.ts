import { Position } from './position'
import { IdentifierKind, SemanticsKind } from './identifier'

export interface Word extends Position {
  name: string

  identifierKind?: IdentifierKind

  semanticsKind?: SemanticsKind
}

import { Position } from './position'
// eslint-disable-next-line import/no-cycle
import { IdentifierKind, SemanticsKind } from './identifier'

export interface Word extends Position {
  name?: string

  identifierKind?: IdentifierKind

  semanticsKind?: SemanticsKind
}

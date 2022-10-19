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

export interface Kinder {
  identifierKind?: IdentifierKind

  semanticsKind?: SemanticsKind
}

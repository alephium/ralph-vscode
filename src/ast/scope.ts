import { Range, Position, Uri } from 'vscode'

export enum ScopeKind {
  Method = 0,
  Contruct = 1,
}

export class Scope {
  uri: Uri

  scopeKind: ScopeKind

  /** * action scope ** */
  scope: Range

  constructor(uri: Uri, range: Range) {
    this.uri = uri
    this.scope = range
    this.scopeKind = ScopeKind.Method
  }

  contains(scope: Scope | Position): boolean {
    if (scope instanceof Scope) {
      if (this.uri && scope.uri) {
        if (this.uri.path !== scope.uri.path) {
          return false
        }
      }
      if (this.scopeKind >= scope.scopeKind) {
        return this.scope.contains(scope.scope)
      }
    }
    if (scope instanceof Position) {
      return this.scope.contains(scope)
    }
    return false
  }

  isEqual(scope: Scope): boolean {
    return this.uri === scope.uri && this.scope === scope.scope
  }
}

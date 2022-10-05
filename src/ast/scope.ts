import { Range, Uri } from 'vscode'
import { Identifier } from './identifier'

export enum ScopeKind {
  Method = 0,
  Contruct = 1,
}

export interface IScope {
  contains(identifier: Identifier | IScope): boolean
  isEqual(scope: IScope): boolean
  union(other: IScope): IScope
}

export class Scope {
  // point?: Position

  uri: Uri

  scopeKind: ScopeKind

  /** * action scope ** */
  scope: Range

  constructor(uri: Uri, range: Range) {
    this.uri = uri
    this.scope = range
    this.scopeKind = ScopeKind.Method
  }

  contains(scope: Scope): boolean {
    if (this.uri && scope.uri) {
      if (this.uri.path !== scope.uri.path) {
        return false
      }
    }

    if (this.scopeKind >= scope.scopeKind) {
      return this.scope.contains(scope.scope)
    }
    return false
  }

  isEqual(scope: Scope): boolean {
    return this.uri === scope.uri && this.scope === scope.scope
  }

  //
}

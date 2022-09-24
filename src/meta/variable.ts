import { SymbolKind } from 'vscode'
import { Ast } from './ast'

export class Variable extends Ast {
  kind(): SymbolKind {
    return SymbolKind.Constant
  }
}

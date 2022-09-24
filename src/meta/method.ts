import { SymbolKind } from 'vscode'
import { Ast } from './ast'

export class Method extends Ast {
  kind(): SymbolKind {
    return SymbolKind.Function
  }
}

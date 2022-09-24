import { SymbolKind } from 'vscode'
import { Ast } from './ast'

export class Emit extends Ast {
  kind(): SymbolKind {
    return SymbolKind.Field
  }
}

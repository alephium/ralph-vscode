import { SymbolKind } from 'vscode'
import { Ast } from './ast'

export class Field extends Ast {
  kind(): SymbolKind {
    return SymbolKind.Field
  }
}

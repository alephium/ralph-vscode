import { SymbolKind } from 'vscode'
import { Ast } from './ast'

export class Event extends Ast {
  kind(): SymbolKind {
    return SymbolKind.Field
  }
}

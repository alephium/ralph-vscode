import { SymbolKind } from 'vscode'
import { Ast } from './ast'

export class Event extends Ast {
  symbolKind(): SymbolKind {
    return SymbolKind.Field
  }
}

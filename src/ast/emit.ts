import { CompletionItemKind, SymbolKind } from 'vscode'
import { Ast } from './ast'

export class Emit extends Ast {
  symbolKind(): SymbolKind {
    return SymbolKind.Field
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Property
  }
}

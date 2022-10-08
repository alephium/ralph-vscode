import { CompletionItemKind, SymbolKind } from 'vscode'

export interface Kinder {
  symbolKind?(): SymbolKind

  completionItemKind?(): CompletionItemKind
}

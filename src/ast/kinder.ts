import vscode, { CompletionItem, CompletionItemKind, CompletionItemLabel, SymbolKind } from 'vscode'

export interface Kinder {
  symbolKind?(): SymbolKind

  completionItemKind?(): CompletionItemKind

  completionItemLabel?(): CompletionItemLabel
}

export interface IntelliSense {
  documentSymbol?(): vscode.DocumentSymbol
  completionItem?(): CompletionItem
}

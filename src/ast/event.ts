import { CompletionItemKind, SymbolKind } from 'vscode'
import { SemanticNode } from './ast'

export class Event extends SemanticNode {
  symbolKind(): SymbolKind {
    return SymbolKind.Field
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Property
  }
}

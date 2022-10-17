import { CompletionItemKind, SymbolKind } from 'vscode'
import { SemanticNode } from './ast'

export class Event extends SemanticNode {
  symbolKind(): SymbolKind {
    return SymbolKind.Event
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Event
  }
}

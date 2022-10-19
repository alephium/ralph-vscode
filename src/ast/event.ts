import { CompletionItemKind, SymbolKind } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { SemanticNode } from './ast'
import { IdentifierKind } from './kinder'

export class Event extends SemanticNode {
  symbolKind(): SymbolKind {
    return SymbolKind.Event
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Event
  }

  constructor(node: TerminalNode) {
    super(node)
    this.identifierKind = IdentifierKind.Event
  }
}

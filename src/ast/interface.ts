import { CompletionItemKind, SymbolKind } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Base } from './base'
import { Identifier } from './identifier'

export class Interface extends Base {
  implementer: Map<string, Base>

  constructor(node: TerminalNode) {
    super(node)
    this.implementer = new Map()
  }

  symbolKind(): SymbolKind {
    return SymbolKind.Interface
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Interface
  }
}

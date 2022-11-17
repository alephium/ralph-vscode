import { CompletionItemKind, SymbolKind } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Base } from './base'
import { Interface } from './interface'

export class Contract extends Base {
  interfaces: Interface | undefined

  parentClass: Map<string, Contract>

  subclass: Map<string, Contract>

  constructor(node: TerminalNode) {
    super(node)
    this.subclass = new Map()
    this.parentClass = new Map()
  }

  symbolKind(): SymbolKind {
    return SymbolKind.Class
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Class
  }
}

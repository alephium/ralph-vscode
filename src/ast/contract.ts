import { CompletionItemKind, SymbolKind } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Base } from './base'
import { Interface } from './interface'

export class Contract extends Base {
  interfaces: Map<string, Interface | undefined>

  parentClass: Map<string, Contract | undefined>

  subclass: Map<string, Contract>

  constructor(node: TerminalNode) {
    super(node)
    this.subclass = new Map()
    this.parentClass = new Map()
    this.interfaces = new Map()
  }

  symbolKind(): SymbolKind {
    return SymbolKind.Class
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Class
  }
}

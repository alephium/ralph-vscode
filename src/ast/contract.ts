import { CompletionItemKind, SymbolKind } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Base } from './base'
import { Interface } from './interface'
import { Property } from './property'

export class Contract extends Base {
  interfaces: Map<string, Interface | undefined>

  parentClass: Map<string, Contract | undefined>

  subclass: Map<string, Contract>

  // TODO: We should pass this as arguments to the constructor when parsing.
  private fields: Property[] | undefined

  constructor(node: TerminalNode) {
    super(node)
    this.subclass = new Map()
    this.parentClass = new Map()
    this.interfaces = new Map()
    this.fields = undefined
  }

  getFields(): Property[] {
    if (this.fields === undefined) {
      this.fields = Array.from(this.members.values()).filter((ident) => ident instanceof Property) as Property[]
    }
    return this.fields
  }

  getImmutableFields(): Property[] {
    return this.getFields().filter((f) => !f.isMut)
  }

  getMutableFields(): Property[] {
    return this.getFields().filter((f) => f.isMut)
  }

  symbolKind(): SymbolKind {
    return SymbolKind.Class
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Class
  }
}

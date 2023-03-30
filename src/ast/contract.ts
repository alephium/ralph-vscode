import { CompletionItemKind, SymbolKind } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Base } from './base'
import { Interface } from './interface'
import { Property } from './property'

export class Contract extends Base {
  interfaces: Map<string, Interface | undefined>

  parentClass: Map<string, Contract | undefined>

  subclass: Map<string, Contract>

  // TODO: We should pass these two as arguments to the constructor when parsing.
  private immutableFields: Property[] | undefined

  private mutableFields: Property[] | undefined

  constructor(node: TerminalNode) {
    super(node)
    this.subclass = new Map()
    this.parentClass = new Map()
    this.interfaces = new Map()
    this.immutableFields = undefined
    this.mutableFields = undefined
  }

  getImmutableFields(): Property[] {
    if (this.immutableFields === undefined) {
      this.immutableFields = Array.from(this.members.values()).filter((ident) => ident instanceof Property && !ident.isMut) as Property[]
    }
    return this.immutableFields
  }

  getMutableFields(): Property[] {
    if (this.mutableFields === undefined) {
      this.mutableFields = Array.from(this.members.values()).filter((ident) => ident instanceof Property && ident.isMut) as Property[]
    }
    return this.mutableFields
  }

  symbolKind(): SymbolKind {
    return SymbolKind.Class
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Class
  }
}

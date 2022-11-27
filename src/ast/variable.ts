import { CompletionItemKind, CompletionItemLabel, SymbolKind } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { SemanticNode } from './ast'
import { Identifier } from './identifier'
import { IdentifierKind } from './kinder'
import caches from '../cache/cache'

export class Variable extends SemanticNode {
  isMut: boolean

  type_: Identifier | undefined

  symbolKind(): SymbolKind {
    return SymbolKind.Variable
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Variable
  }

  constructor(node: TerminalNode) {
    super(node)
    this.isMut = false
    this.identifierKind = IdentifierKind.Variable
  }

  getType(): Identifier | undefined {
    return caches.get(this.getUri()!, <string>this.type_?.name)
  }

  label(): string {
    if (this.isMut) return `(mut) ${this.name}`
    return this.name!
  }

  completionItemLabel(): CompletionItemLabel {
    return {
      label: this.name!,
      // detail: this.label(),
      description: this.hoverSymbolDetail(),
    }
  }
}

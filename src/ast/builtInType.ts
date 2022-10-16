import { CompletionItemKind, CompletionItemLabel, SymbolKind } from 'vscode'
import { SemanticNode } from './ast'

export class BuiltInType extends SemanticNode {
  description: string | undefined

  constructor(name: string) {
    super(name)
    this.description = this.detail
  }

  symbolKind(): SymbolKind {
    return SymbolKind.Class
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Class
  }

  completionItemLabel(): CompletionItemLabel {
    return {
      label: this.name,
      detail: this.detail,
      description: this.description,
    }
  }
}

import { CompletionItemKind, SymbolKind } from 'vscode'
import { Base } from './base'

export class Interface extends Base {
  symbolKind(): SymbolKind {
    return SymbolKind.Interface
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Interface
  }
}

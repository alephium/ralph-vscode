import { CompletionItemKind, SymbolKind } from 'vscode'
import { Base } from './base'

export class AssetScript extends Base {
  symbolKind(): SymbolKind {
    return SymbolKind.Class
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Class
  }
}

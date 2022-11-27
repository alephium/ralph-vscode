import * as vscode from 'vscode'
import cache from '../../cache/cache'
import { Identifier } from '../../ast/identifier'
import { Filter } from '../filter'

export class IdentifierProvider extends Filter implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (this.isSkip(document, position)) return undefined
    const pos = { uri: document.uri, point: position }
    const container = cache.container(document.uri, pos)
    return this.defs(container)
  }

  defs(identifier: Identifier | undefined): vscode.CompletionItem[] {
    if (identifier) {
      const subItems = identifier.defs?.().map((value) => value.completionItem!())
      const items: vscode.CompletionItem[] = []
      if (subItems) items.push(...subItems)
      items.push(...this.defs(identifier.parent))
      return items
    }
    return []
  }
}

import * as vscode from 'vscode'
import cache from '../../cache/cache'
import { Identifier } from '../../ast/identifier'
import { Position } from '../../ast/position'
import { Filter } from '../filter'

export class IdentifierProvider extends Filter implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (this.isSkip(document, position)) return undefined
    const pos = {
      uri: document.uri,
      point: position,
    }

    const container = Array.from(cache.values())
      .find((value) => value.isScope(pos))
      ?.container(pos)

    return this.defs(container, pos)
  }

  defs(container: Identifier | undefined, pos: Position): vscode.CompletionItem[] {
    let items: vscode.CompletionItem[] = []
    if (container) {
      const subItem = container.def?.(pos)?.map((value) => value.completionItem!())
      if (subItem) items = items.concat(subItem)
      items = items.concat(this.defs(container.container?.(), pos))
    }
    return items
  }
}

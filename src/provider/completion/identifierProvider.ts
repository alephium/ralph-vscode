import * as vscode from 'vscode'
import { CompletionItem } from 'vscode'
import cache from '../../cache/cache'
import { Identifier } from '../../ast/identifier'
import { Position } from '../../ast/position'

export class IdentifierProvider implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
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
      const subItem = container.def?.(pos)?.map((value) => new CompletionItem(value.completionItemLabel!(), value.completionItemKind?.()))
      if (subItem) items = items.concat(subItem)
      items = items.concat(this.defs(container.container?.(), pos))
    }
    return items
  }
}

import * as vscode from 'vscode'
import { CancellationToken, ProviderResult } from 'vscode'
import cache from '../../cache/cache'
import { Filter } from '../filter'
import { Contract } from '../../ast/contract'
import { Event } from '../../ast/event'
import { Identifier } from '../../ast/identifier'

export class EmitProvider extends Filter implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    return this.emitter(cache.container({ point: position, uri: document.uri }))
  }

  resolveCompletionItem(item: vscode.CompletionItem, token: CancellationToken): ProviderResult<vscode.CompletionItem> {
    return undefined
  }

  emitter(container: Identifier | undefined): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (container) {
      if (container instanceof Contract) {
        return container
          .defs()
          .filter((value) => value instanceof Event)
          .map((value) => value.completionItem!())
      }
      if (container.parent) {
        return this.emitter(container.parent)
      }
    }
    return undefined
  }
}

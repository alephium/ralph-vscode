/* eslint-disable @typescript-eslint/no-unused-vars */
import * as vscode from 'vscode'
import cache from '../../cache/cache'
import { Filter } from '../filter'

export class GlobalProvider extends Filter implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (this.isSkip(document, position)) return undefined
    return cache.defs(document.uri)?.map((value) => value.completionItem!())
  }
}

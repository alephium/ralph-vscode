/* eslint-disable @typescript-eslint/no-unused-vars */
import * as vscode from 'vscode'
import { CompletionItem } from 'vscode'
import cache from '../../cache/cache'

export class GlobalProvider implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    return Array.from(cache.values()).map((value) => new CompletionItem(value.completionItemLabel!(), value.completionItemKind?.()))
  }
}

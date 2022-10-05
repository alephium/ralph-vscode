import * as vscode from 'vscode'
import { CompletionItem, CompletionItemKind, CompletionTriggerKind } from 'vscode'
import cache from '../cache/cache'

export class CompletionProvider implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    const word = document.getText(document.getWordRangeAtPosition(position))
    return Array.from(cache.values()).map((value) => new CompletionItem(value.name, value.completionItemKind()))
  }
}

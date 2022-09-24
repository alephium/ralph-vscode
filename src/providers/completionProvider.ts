import * as vscode from 'vscode'
import { CompletionItem } from 'vscode'

export class CompletionProvider implements vscode.CompletionItemProvider<CompletionItem> {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    return []
  }
}

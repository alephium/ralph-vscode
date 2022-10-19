import * as vscode from 'vscode'
import cache from '../../cache/cache'
import { Filter } from '../filter'

export class EnumProvider extends Filter implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    const word = this.word(document, position, -1)
    if (word) {
      for (const value of cache.values()) {
        const member = value.def(word)
        if (member) return member?.getChild?.().map((value) => value.completionItem!())
      }
    }
    return undefined
  }
}

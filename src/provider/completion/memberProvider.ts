import * as vscode from 'vscode'
import cache from '../../cache/cache'
import { Filter } from '../filter'

export class MemberProvider extends Filter implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    const word = this.word(document, position, -1)
    if (word) {
      return cache
        .def(word)
        ?.getType?.()
        ?.defs?.()
        ?.map((value) => value.completionItem!())
    }
    return undefined
  }
}

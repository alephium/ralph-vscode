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
    if (!word) return undefined
    const enumVal = Array.from(cache.values())
      .find((value) => value.findOne(word))
      ?.findOne(word)
    return enumVal?.getChild?.().map((value) => value.completionItem!())
  }
}

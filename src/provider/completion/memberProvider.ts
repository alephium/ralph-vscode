import * as vscode from 'vscode'
import cache from '../../cache/cache'
import { Filter } from '../filter'
import { Word } from '../../ast/word'

export class MemberProvider extends Filter implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (this.isSkip(document, position) && context.triggerCharacter !== '.') return undefined
    const range = document.getWordRangeAtPosition(position.with(position.line, position.character - 1))
    const word = <Word>{
      name: document.getText(range),
      point: position,
      uri: document.uri,
    }
    console.log(word)
    for (const value of cache.values()) {
      const def = value.def(word)
      if (def) {
        return def
          .getType?.()
          ?.defs?.()
          ?.map((value) => value.completionItem!())
      }
    }
    return undefined
  }
}

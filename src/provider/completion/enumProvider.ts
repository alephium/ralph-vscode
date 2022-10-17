import * as vscode from 'vscode'
import { CompletionItem } from 'vscode'
import cache from '../../cache/cache'
import { Filter } from '../filter'
import { Word } from '../../ast/word'

export class EnumProvider extends Filter implements vscode.CompletionItemProvider {
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
    const enumVal = Array.from(cache.values())
      .find((value) => value.findOne(word))
      ?.findOne(word)
    return enumVal?.getChild?.().map((value) => value.completionItem!())
  }
}

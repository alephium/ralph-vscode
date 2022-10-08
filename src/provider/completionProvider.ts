import * as vscode from 'vscode'
import { CompletionItem, CompletionItemKind, CompletionItemLabel, CompletionTriggerKind } from 'vscode'
import cache from '../cache/cache'
import { Identifier } from '../ast/identifier'
import { BuiltInType } from '../ast/builtInType'

import { builtInType } from './hover/builtIn/type'

export class CompletionProvider implements vscode.CompletionItemProvider {
  builtInType: Array<Identifier>

  constructor() {
    this.builtInType = builtInType.map((value) => {
      const obj = new BuiltInType(value.name)
      obj.description = `${value.kind}: ${value.detail}`
      return obj
    })
  }

  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    const word = document.getText(document.getWordRangeAtPosition(position))
    return this.builtInType
      .concat(Array.from(cache.values()))
      .map((value) => new CompletionItem(value.completionItemLabel!(), value.completionItemKind?.()))
  }
}

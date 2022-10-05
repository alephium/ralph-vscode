/* eslint-disable @typescript-eslint/no-unused-vars */
import * as vscode from 'vscode'
import { CancellationToken, CompletionContext, CompletionItem, CompletionItemKind, Position, TextDocument } from 'vscode'
import jsonData from './hover/builtIn/ralph-built-in-functions.json'
import { Fun } from './hover/builtIn/function'

export class BuiltInFunctionProvider implements vscode.CompletionItemProvider {
  items: Array<Fun>

  constructor() {
    this.items = Object.assign(new Array<Fun>(), jsonData)
  }

  provideCompletionItems(
    document: TextDocument,
    _position: Position,
    token: CancellationToken,
    context: CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    return this.items.map(
      (item) =>
        new CompletionItem(
          {
            label: `${item.name}!`,
            detail: item.signature,
            description: item.doc,
          },
          CompletionItemKind.Function
        )
    )
  }
}

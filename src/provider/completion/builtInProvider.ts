/* eslint-disable @typescript-eslint/no-unused-vars */
import * as vscode from 'vscode'
import { CancellationToken, CompletionContext, CompletionItem, CompletionItemKind, Position, SnippetString, TextDocument } from 'vscode'
import jsonData from '../builtIn/ralph-built-in-functions.json'
import { Func } from '../builtIn/func'
import { Identifier } from '../../ast/identifier'
import { BuiltInType } from '../../ast/builtInType'
import { builtInType } from '../hover/builtIn/primitives'
import { keyword } from '../hover/builtIn/keyword'
import { Filter } from '../filter'

export class BuiltInProvider extends Filter implements vscode.CompletionItemProvider {
  items: Array<Func>

  builtInType: Array<Identifier>

  builtInLiteral: Array<string>

  constructor() {
    super()
    this.items = Object.assign(new Array<Func>(), jsonData)
    this.builtInType = builtInType.map((value) => {
      const obj = new BuiltInType(value.name)
      obj.description = `${value.kind}: ${value.detail}`
      return obj
    })
    this.builtInLiteral = ['true', 'false']
  }

  provideCompletionItems(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
    context: CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (this.isSkip(document, position)) return undefined
    const items = this.builtInType
      .map((value) => value.completionItem!())
      .concat(this.builtInLiteral.map((value) => new CompletionItem({ label: value }, CompletionItemKind.Value)))
      .concat(keyword.map((value) => new CompletionItem({ label: value.name, description: value.detail }, CompletionItemKind.Keyword)))

    if (document.getWordRangeAtPosition(position, /\([a-zA-Z_][0-9a-zA-Z_, :!().;]*\)/i)) return items
    return this.items
      .map((item) => {
        const method = new CompletionItem(
          {
            // label: `🔓${item.name}!${item.signature.substring(item.signature.indexOf('('), item.signature.indexOf(')') + 1)}`,
            // label: `🔓${item.signature.substring(3)}`,
            label: `🔓${item.name}!`,
            // detail: item.signature,
            description: item.signature,
          },
          CompletionItemKind.Function
        )

        method.filterText = item.name
        method.sortText = item.name
        method.preselect = true
        method.insertText = new SnippetString(`${item.name}!`)
        return method
      })
      .concat(items)
  }
}

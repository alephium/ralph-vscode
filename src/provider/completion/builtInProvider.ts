/* eslint-disable @typescript-eslint/no-unused-vars */
import * as vscode from 'vscode'
import { CancellationToken, CompletionContext, CompletionItem, CompletionItemKind, Position, TextDocument } from 'vscode'
import jsonData from '../hover/builtIn/ralph-built-in-functions.json'
import { Fun } from '../hover/builtIn/function'
import { Identifier } from '../../ast/identifier'
import { BuiltInType } from '../../ast/builtInType'
import { builtInType } from '../hover/builtIn/primitives'
import { Filter } from '../filter'

export class BuiltInProvider extends Filter implements vscode.CompletionItemProvider {
  items: Array<Fun>

  builtInType: Array<Identifier>

  builtInLiteral: Array<string>

  constructor() {
    super()
    this.items = Object.assign(new Array<Fun>(), jsonData)
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
    if (document.getWordRangeAtPosition(position, /\([a-zA-Z][0-9a-zA-Z, :!().;]*\)/i)) return items
    return this.items
      .map(
        (item) =>
          new CompletionItem(
            {
              label: `${item.name}!${item.signature.substring(item.signature.indexOf('('), item.signature.indexOf(')') + 1)}`,
              detail: item.signature,
              description: item.doc,
            },
            CompletionItemKind.Function
          )
      )
      .concat(items)
  }
}

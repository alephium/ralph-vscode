/* eslint-disable @typescript-eslint/no-unused-vars */
import * as vscode from 'vscode'
import { CancellationToken, CompletionContext, CompletionItem, CompletionItemKind, Position, TextDocument } from 'vscode'
import jsonData from '../hover/builtIn/ralph-built-in-functions.json'
import { Fun } from '../hover/builtIn/function'
import { Identifier } from '../../ast/identifier'
import { BuiltInType } from '../../ast/builtInType'
import { builtInType } from '../hover/builtIn/primitives'

export class BuiltInProvider implements vscode.CompletionItemProvider {
  items: Array<Fun>

  builtInType: Array<Identifier>

  constructor() {
    this.items = Object.assign(new Array<Fun>(), jsonData)
    this.builtInType = builtInType.map((value) => {
      const obj = new BuiltInType(value.name)
      obj.description = `${value.kind}: ${value.detail}`
      return obj
    })
  }

  provideCompletionItems(
    document: TextDocument,
    _position: Position,
    token: CancellationToken,
    context: CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
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
      .concat(this.builtInType.map((value) => new CompletionItem(value.completionItemLabel!(), value.completionItemKind?.())))
  }
}

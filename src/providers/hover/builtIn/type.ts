/* eslint-disable @typescript-eslint/no-non-null-assertion */
// eslint-disable-next-line import/no-unresolved, max-classes-per-file
import * as vscode from 'vscode'
import { Item } from '../item'

export class BuiltInTypeHoverProvider implements vscode.HoverProvider {
  builtItems!: Map<string, Item>

  items: Array<Item>

  constructor() {
    this.builtItems = new Map()
    this.items = [
      {
        name: '()',
        detail: 'Constructor: None (a return statement with nothing)',
        kind: 'primitives type',
      },
      {
        name: 'Bool',
        detail: 'Constructor: false, true: <, >, >=, <=, ==, !=, &&, ||, !',
        kind: 'primitives type',
      },
      {
        name: 'I256',
        detail: 'Constructor: -<number>, <number>i, +, -, *, /, %, ⊕, ⊖, ⊗, <<, >>, >, ^, |',
        kind: 'primitives type',
      },
      {
        name: 'U256',
        detail: 'Constructor: <number>, <number>u, +, -, *, /, %, ⊕, ⊖, ⊗, <<, >>, >, ^, |',
        kind: 'primitives type',
      },
      {
        name: 'Address',
        detail: 'Constructor: @<address>, nullAddress!()',
        kind: 'primitives type',
      },
      {
        name: 'ByteVec',
        detail: 'Constructor: #<hex-string>, ++',
        kind: 'primitives type',
      },
      {
        name: '[type; size]	',
        detail: 'Constructor: [<value...>], type example: [Address; 6]',
        kind: 'primitives type',
      },
    ]

    this.items.forEach((item) => this.builtItems.set(item.name, item))
  }

  provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    const range = document.getWordRangeAtPosition(position)
    const item = this.builtItems.get(document.getText(range))!
    return new vscode.Hover([`(builtIn global ${item.kind}) \n ${item.name}`, item.detail])
  }
}

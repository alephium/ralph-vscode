import * as vscode from 'vscode'
import { Item } from './item'
import { Filter } from '../../filter'

export const builtInType = [
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

export class BuiltInPrimitivesHoverProvider extends Filter implements vscode.HoverProvider {
  builtItems!: Map<string, Item>

  constructor() {
    super()
    this.builtItems = new Map()
    builtInType.forEach((item) => this.builtItems.set(item.name, new Item(item.name, item.detail, item.kind)))
  }

  provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    const word = this.word(document, position)
    return this.builtItems.get(<string>word?.name)?.hover()
  }
}

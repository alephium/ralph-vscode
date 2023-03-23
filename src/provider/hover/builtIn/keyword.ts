import * as vscode from 'vscode'
import { Item } from './item'
import { Filter } from '../../filter'

export const keyword = [
  {
    name: 'const',
    detail: 'const varName = value',
    kind: 'keyword',
  },
  {
    name: 'let',
    detail: 'Assignment: let [mut] <name> = ...',
    kind: 'keyword',
  },
  {
    name: 'mut',
    detail: 'Assignment: let [mut] <name> = ...',
    kind: 'keyword',
  },
  {
    name: '=',
    detail: 'Assignment: <arg> = <value> or (<arg1>, <argN>) = funcMultipleRetVals()',
    kind: 'keyword',
  },
  {
    name: 'pub',
    detail: 'Function: [pub] fn <name>(arg: <type>) -> <type> { return <thingN, ...> }',
    kind: 'keyword',
  },
  {
    name: 'fn',
    detail: 'Function: [pub] fn <name>(arg: <type>) -> <type> { return <thingN, ...> }',
    kind: 'keyword',
  },
  {
    name: 'return',
    detail: 'Function: [pub] fn <name>(arg: <type>) -> <type> { return <thingN, ...> }',
    kind: 'keyword',
  },
  {
    name: 'if',
    detail: 'Conditional: if <boolean expression> { <statements> } [else if { <statements> } else { ... }]',
    kind: 'keyword',
  },
  {
    name: 'else',
    detail: 'Conditional: if <boolean expression> { <statements> } [else if { <statements> } else { ... }]',
    kind: 'keyword',
  },
  {
    name: 'while',
    detail: 'Iteration: while <boolean expression> { <statements> }',
    kind: 'keyword',
  },
  {
    name: 'for',
    detail: 'for (let mut index = 0; index <= length; index = index + 1){...}',
    kind: 'keyword',
  },
  {
    name: 'event',
    detail: 'event <TupleName>(field1: <type>, field2: <type>, fieldN: <type>, ...)',
    kind: 'keyword',
  },
  {
    name: 'emit',
    detail: 'emit <TupleName>(<value1>, <value2>, <valueN>, ...)',
    kind: 'keyword',
  },
  {
    name: 'Interface',
    detail: 'Interface <InterfaceName> { ... }',
    kind: 'keyword',
  },
  {
    name: 'AssetScript',
    detail: 'AssetScript <ScriptName>([mut] fieldN: <type>) { ... }',
    kind: 'keyword',
  },
  {
    name: 'Contract',
    detail: 'Contract ContractName([mut] fieldN: <type>) [extends <InterfaceName>] { ... }',
    kind: 'keyword',
  },
  {
    name: 'extends',
    detail: 'Contract ContractName([mut] fieldN: <type>) [extends <ContractName>] { ... }',
    kind: 'keyword',
  },
  {
    name: 'implements',
    detail: 'Contract ContractName([mut] fieldN: <type>) [implements <InterfaceName>] { ... }',
    kind: 'keyword',
  },
  {
    name: 'TxScript',
    detail: 'TxScript <ScriptName>([mut] fieldN: <type>) { ... }',
    kind: 'keyword',
  },
  {
    name: 'enum',
    detail: 'enum{...}',
    kind: 'keyword',
  },
  {
    name: 'Abstract',
    detail: 'Abstract',
    kind: 'keyword',
  },
  {
    name: 'using',
    detail: '@using(approvedAssets = true)',
    kind: 'keyword',
  },
  {
    name: '@using',
    detail: '@using(approvedAssets = true)',
    kind: 'keyword',
  },
  {
    name: 'unused',
    detail: '@unused value: type',
    kind: 'keyword',
  },
  {
    name: '@unused',
    detail: '@unused value: type',
    kind: 'keyword',
  },
  {
    name: 'alph',
    detail: 'alph',
    kind: 'keyword',
  },
]

export class KeywordHoverProvider extends Filter implements vscode.HoverProvider {
  builtItems!: Map<string, Item>

  constructor() {
    super()
    this.builtItems = new Map()
    keyword.forEach((item) => this.builtItems.set(item.name, new Item(item.name, item.detail, item.kind)))
  }

  provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    const word = this.word(document, position)
    return this.builtItems.get(<string>word?.name)?.hover()
  }
}

/* eslint-disable @typescript-eslint/no-non-null-assertion */
// eslint-disable-next-line import/no-unresolved, max-classes-per-file
import * as vscode from 'vscode'
import { Item } from './item'

export class TokenHoverProvider implements vscode.HoverProvider {
  builtItems!: Map<string, Item>

  items: Array<Item>

  constructor() {
    this.builtItems = new Map()
    this.items = [
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
        detail: 'Function: [pub] [payable] fn <name>(arg: <type>) -> <type> { return <thingN, ...> }',
        kind: 'keyword',
      },
      {
        name: 'fn',
        detail: 'Function: [pub] [payable] fn <name>(arg: <type>) -> <type> { return <thingN, ...> }',
        kind: 'keyword',
      },
      {
        name: 'return',
        detail: 'Function: [pub] [payable] fn <name>(arg: <type>) -> <type> { return <thingN, ...> }',
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
        name: 'TxContract',
        detail: 'Contract ContractName([mut] fieldN: <type>) [extends <InterfaceName>] { ... }',
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
    ]

    this.items.forEach((item) => this.builtItems.set(item.name, item))
  }

  provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    const range = document.getWordRangeAtPosition(position)
    const item = this.builtItems.get(document.getText(range))!
    return new vscode.Hover([`(builtIn syntax ${item.kind}) \n ${item.name}`, item.detail])
  }
}

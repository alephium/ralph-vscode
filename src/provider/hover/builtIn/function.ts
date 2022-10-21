import * as vscode from 'vscode'
import { MarkdownString } from 'vscode'
import jsonData from './ralph-built-in-functions.json'
import { Filter } from '../../filter'

// https://raw.githubusercontent.com/alephium/alephium/master/protocol/src/main/resources/ralph-built-in-functions.json
export interface Fun {
  name: string

  category: string

  signature: string

  doc: string

  params: [string]

  returns: string
}

export class FunctionHoverProvider extends Filter implements vscode.HoverProvider {
  builtItems: Map<string, Fun>

  items: Array<Fun>

  constructor() {
    super()
    this.builtItems = new Map()
    this.items = Object.assign(new Array<Fun>(), jsonData)
    this.items.forEach((item) => this.builtItems.set(`${item?.name}!`, item))
  }

  provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    if (this.isSkip(document, position)) return undefined
    const range = document.getWordRangeAtPosition(position)
    const globalFun = document.getText(range?.with(range.start, new vscode.Position(range.end.line, range.end.character + 1)))
    const item = this.builtItems.get(globalFun)!
    const detail = new MarkdownString()
    detail.appendMarkdown(`
    builtIn global function: ${item?.name}!
    ${item.doc}\n\t
    ${item.signature}
    \n---\n\t
    `)
    item.params.map((param) => detail.appendMarkdown(`${param}\n\t`))
    detail.appendMarkdown(`${item.returns}\n\t`)
    return new vscode.Hover(detail)
  }
}

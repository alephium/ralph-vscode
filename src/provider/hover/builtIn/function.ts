import * as vscode from 'vscode'
import { MarkdownString } from 'vscode'
import jsonData from '../../builtIn/ralph-built-in-functions.json'
import { Filter } from '../../filter'
import { Func } from '../../builtIn/func'
import { tryGetContractBuiltInFunction } from '../../builtIn/contractBuiltIn'

export class FunctionHoverProvider extends Filter implements vscode.HoverProvider {
  builtItems: Map<string, Func>

  items: Array<Func>

  constructor() {
    super()
    this.builtItems = new Map()
    this.items = Object.assign(new Array<Func>(), jsonData)
    this.items.forEach((item) => this.builtItems.set(`${item?.name}!`, item))
  }

  provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    if (this.isSkip(document, position)) return undefined
    const range = document.getWordRangeAtPosition(position)
    if (range === undefined) {
      return undefined
    }
    const funcName = document.getText(range.with(range.start, new vscode.Position(range.end.line, range.end.character + 1)))
    const item = this.builtItems.get(funcName)
    if (item !== undefined) {
      return this.getHoverDetail(item)
    }
    const contractBuiltInFunc = tryGetContractBuiltInFunction(document, range, funcName)
    if (contractBuiltInFunc === undefined) {
      return undefined
    }
    return this.getHoverDetail(contractBuiltInFunc)
  }

  private getHoverDetail(func: Func): vscode.Hover {
    const detail = new MarkdownString()
    detail.appendMarkdown(`
    ${func.signature}
    \n---\n\t
    `)
    return new vscode.Hover(detail)
  }
}

import * as vscode from 'vscode'
import { MarkdownString } from 'vscode'
import jsonData from '../../builtIn/ralph-built-in-functions.json'
import { Filter } from '../../filter'
import { Fun } from '../../builtIn/fun'
import { ContractBuiltInFuncNames, ContractBuiltInFuncs } from '../../builtIn/contractBuiltIn'
import cache from '../../../cache/cache'
import { Contract } from '../../../ast/contract'

export class FunctionHoverProvider extends Filter implements vscode.HoverProvider {
  builtItems: Map<string, Fun>

  items: Array<Fun>

  constructor() {
    super()
    this.builtItems = new Map()
    this.items = Object.assign(new Array<Fun>(), jsonData)
    this.items.forEach((item) => this.builtItems.set(`${item?.name}!`, item))
  }

  private tryGetContractBuiltInFunction(
    document: vscode.TextDocument,
    range: vscode.Range,
    builtInFuncName: string
  ): vscode.ProviderResult<vscode.Hover> {
    if (!builtInFuncName.endsWith('!')) {
      return undefined
    }
    const funcName = builtInFuncName.slice(0, -1)
    if (!ContractBuiltInFuncNames.includes(funcName)) {
      return undefined
    }
    const regex = new RegExp(`[A-Z][a-zA-Z0-9_]*\\.${funcName}`)
    const fullyQualifiedRange = document.getWordRangeAtPosition(range.start, regex)
    const fullyQualifiedName = document.getText(fullyQualifiedRange)
    const typeId = fullyQualifiedName.split('.')[0]
    const contractDef = cache.get(document.uri, typeId)
    if (contractDef === undefined || !(contractDef instanceof Contract)) {
      return undefined
    }
    const func = ContractBuiltInFuncs[`${funcName}`](contractDef)
    return this.getHoverDetail(func, 'contract builtin function')
  }

  provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    if (this.isSkip(document, position)) return undefined
    const range = document.getWordRangeAtPosition(position)
    if (range === undefined) {
      return undefined
    }
    const funcName = document.getText(range.with(range.start, new vscode.Position(range.end.line, range.end.character + 1)))
    const item = this.builtItems.get(funcName)
    if (item === undefined) {
      return this.tryGetContractBuiltInFunction(document, range, funcName)
    }
    return this.getHoverDetail(item, 'global builtin function')
  }

  private getHoverDetail(func: Fun, prefix: string): vscode.Hover {
    const detail = new MarkdownString()
    detail.appendMarkdown(`
    ${prefix}: ${func.name}!
    ${func.doc}\n\t
    ${func.signature}
    \n---\n\t
    `)
    func.params.map((param) => detail.appendMarkdown(`${param}\n\t`))
    detail.appendMarkdown(`${func.returns}\n\t`)
    return new vscode.Hover(detail)
  }
}

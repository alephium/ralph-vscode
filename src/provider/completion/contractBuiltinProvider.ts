import * as vscode from 'vscode'
import { CancellationToken, CompletionContext, CompletionItem, CompletionItemKind, Position, SnippetString, TextDocument } from 'vscode'
import { Filter } from '../filter'
import cache from '../../cache/cache'
import { Contract } from '../../ast/contract'
import { getContractBiltInFunction } from '../builtIn/contractBuiltIn'

export class ContractBuiltInProvider extends Filter implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
    context: CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (this.isSkip(document, position)) return undefined

    const line = document.lineAt(position.line)
    const matched = line.text.substring(0, position.character).match(/([A-Z][a-zA-Z0-9_]*\.([a-z][a-zA-Z0-9_]*)?)/)
    if (matched === null || matched.length < 1) {
      return undefined
    }
    const staticCall = matched[0]
    const tokens = staticCall.split('.')
    if (tokens.length < 1) {
      return undefined
    }
    const typeId = tokens[0]
    const contractDef = cache.get(document.uri, typeId)
    if (contractDef === undefined || !(contractDef instanceof Contract)) {
      return undefined
    }
    const funcs = getContractBiltInFunction(contractDef)
    return funcs.map((func) => {
      const method = new CompletionItem(
        {
          label: `🔓${func.name}!`,
          description: func.signature,
        },
        CompletionItemKind.Function
      )

      method.filterText = func.name
      method.sortText = func.name
      method.preselect = true
      method.insertText = new SnippetString(`${func.name}!`)
      return method
    })
  }
}

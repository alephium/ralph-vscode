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

    if (context.triggerCharacter !== '.') {
      return undefined
    }
    const wordRange = document.getWordRangeAtPosition(position, /[A-Z][a-zA-Z0-9_]*\./)
    if (wordRange === undefined) {
      return undefined
    }
    const word = document.getText(wordRange).trim()
    if (!word.endsWith('.')) {
      return undefined
    }
    const typeId = word.slice(0, -1)
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

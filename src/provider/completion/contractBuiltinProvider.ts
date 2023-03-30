import * as vscode from 'vscode'
import { CancellationToken, CompletionContext, CompletionItem, CompletionItemKind, Position, SnippetString, TextDocument } from 'vscode'
import { Fun } from '../builtIn/fun'
import { Filter } from '../filter'
import cache from '../../cache/cache'
import { Contract } from '../../ast/contract'
import { Property } from '../../ast/property'

function getEncodeFunc(fields: Property[], funcName: string, doc: string): Fun {
  const fieldsNameAndType = fields.map((field) => [field.name!, field.type_!.name!])
  const fieldsSig = fieldsNameAndType.map(([name, type]) => `${name}:${type}`).join(', ')
  const signature = `fn ${funcName}(${fieldsSig}) -> (ByteVec)`
  return {
    name: funcName,
    category: 'Contract',
    signature,
    doc,
    params: fieldsNameAndType.map(([name, _]) => `${name}`),
    paramValue: [],
    returns: '@returns a ByteVec encoding the inputs',
  }
}

function getEncodeImmFieldsFunc(immFields: Property[]): Fun {
  return getEncodeFunc(immFields, 'encodeImmFields', 'Encode contract immutable fields to bytevec')
}

function getEncodeMutFieldsFunc(mutFields: Property[]): Fun {
  return getEncodeFunc(mutFields, 'encodeMutFields', 'Encode contract mutable fields to bytevec')
}

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
    const wordRange = document.getWordRangeAtPosition(position, /[A-Z][a-zA-Z0-9_]*\./i)
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
    const immFields = contractDef.getImmutableFields()
    const mutFields = contractDef.getMutableFields()
    const funcs = [getEncodeImmFieldsFunc(immFields), getEncodeMutFieldsFunc(mutFields)]
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

/* eslint-disable @typescript-eslint/no-unused-vars */
import * as vscode from 'vscode'
import { CancellationToken, CompletionContext, CompletionItem, CompletionItemKind, Position, TextDocument } from 'vscode'
import { Filter } from '../filter'

const annotations: Map<string, string[]> = new Map([
  ['using', ['preapprovedAssets', 'assetsInContract', 'checkExternalCaller', 'updateFields']],
  ['std', ['id', 'enabled']],
  ['unused', []],
])

export class AnnotationProvider extends Filter implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
    context: CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (this.isSkip(document, position)) return undefined

    const keys = Array.from(annotations.keys())
    if (context.triggerCharacter === '@') {
      return keys.map((item) => new CompletionItem({ label: item }, CompletionItemKind.Keyword))
    }

    if (context.triggerCharacter === '(' || context.triggerCharacter === ')') {
      const { text } = document.lineAt(position)
      const trimmedText = text.trim()
      const selectedKey = keys.find((key) => trimmedText.includes(`@${key}`))
      if (selectedKey === undefined) {
        return undefined
      }
      const fields = annotations.get(selectedKey)
      if (fields === undefined || fields.length === 0) {
        return undefined
      }
      return fields.map((field) => new CompletionItem({ label: `${field} = ` }, CompletionItemKind.Field))
    }
    return undefined
  }
}

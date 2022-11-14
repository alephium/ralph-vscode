/* eslint-disable @typescript-eslint/no-unused-vars */
import * as vscode from 'vscode'
import { CancellationToken, CompletionContext, CompletionItem, CompletionItemKind, Position, TextDocument } from 'vscode'
import { Filter } from '../filter'

export class AnnotationProvider extends Filter implements vscode.CompletionItemProvider {
  annotationField: Array<string>

  constructor() {
    super()
    this.annotationField = ['preapprovedAssets', 'assetsInContract', 'externalCallCheck', 'readonly']
  }

  provideCompletionItems(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
    context: CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (this.isSkip(document, position)) return undefined

    if (context.triggerCharacter === '@') {
      return ['using', 'unused'].map((item) => new CompletionItem({ label: item }, CompletionItemKind.Keyword))
    }

    if (context.triggerCharacter === '(') {
      const { text } = document.lineAt(position)
      if (text && text.trim().indexOf('@using') >= 0) {
        return this.annotationField.map((item) => new CompletionItem({ label: `${item} = true` }, CompletionItemKind.Variable))
      }
    }
    return undefined
  }
}

import * as vscode from 'vscode'
import {
  CancellationToken,
  Position,
  ProviderResult,
  SignatureHelp,
  SignatureHelpContext,
  SignatureInformation,
  TextDocument,
} from 'vscode'
import { Filter } from './filter'
import jsonData from './hover/builtIn/ralph-built-in-functions.json'
import { Fun } from './hover/builtIn/function'
import { IdentifierKind, SemanticsKind } from '../ast/kinder'

export class RalphSignatureHelpProvider extends Filter implements vscode.SignatureHelpProvider {
  items: Array<Fun>

  builtItems: Map<string, Fun>

  constructor() {
    super()
    this.builtItems = new Map()
    this.items = Object.assign(new Array<Fun>(), jsonData)
    this.items.forEach((item) => this.builtItems.set(`${item?.name}!`, item))
  }

  provideSignatureHelp(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
    context: SignatureHelpContext
  ): ProviderResult<SignatureHelp> {
    if (this.isSkip(document, position)) return undefined
    const range = document.getWordRangeAtPosition(position.with(position.line, position.character - 1), /[a-zA-Z][0-9a-zA-Z]*!?/i)
    const word = document.getText(range)
    const item = this.builtItems.get(word)
    const signature = new SignatureHelp()
    if (item) {
      signature.signatures.push(new SignatureInformation(item.signature))
      return signature
    }
    const callMethod = this.callChain(document, position.with(position.line, position.character - 1))
    if (callMethod && callMethod.identifierKind === IdentifierKind.Method && callMethod.semanticsKind === SemanticsKind.Def) {
      signature.signatures.push(callMethod.signatureInformation!())
      return signature
    }
    return undefined
  }
}

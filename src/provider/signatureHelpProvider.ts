import * as vscode from 'vscode'
import {
  CancellationToken,
  ParameterInformation,
  Position,
  ProviderResult,
  SignatureHelp,
  SignatureHelpContext,
  SignatureInformation,
  TextDocument,
} from 'vscode'
import { Filter } from './filter'
import jsonData from './builtIn/ralph-built-in-functions.json'
import { Fun } from './builtIn/fun'
import { SemanticsKind } from '../ast/kinder'

export class RalphSignatureHelpProvider extends Filter implements vscode.SignatureHelpProvider {
  items: Array<Fun>

  builtItems: Map<string, Fun>

  constructor() {
    super()
    this.builtItems = new Map()
    this.items = Object.assign(new Array<Fun>(), jsonData)
    this.items.forEach((item) => this.builtItems.set(`${item?.name}!`, item))
  }

  splitParam(fun: Fun) {
    fun.paramValue = fun.params.map((param) => {
      const values = param.trim().split(/\s+/)
      return values[1]
    })
  }

  provideSignatureHelp(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
    context: SignatureHelpContext
  ): ProviderResult<SignatureHelp> {
    if (this.isSkip(document, position)) return undefined
    if (context.isRetrigger) {
      if (context.activeSignatureHelp) {
        if (context.triggerCharacter === ',') {
          context.activeSignatureHelp.activeParameter += 1
        }
        return context.activeSignatureHelp
      }
    }
    const range = document.getWordRangeAtPosition(position.with(position.line, position.character - 1), /[a-zA-Z_][0-9a-zA-Z_]*!?/i)
    const word = document.getText(range)
    const item = this.builtItems.get(word)
    const signature = new SignatureHelp()
    if (item) {
      this.splitParam(item)
      const info = new SignatureInformation(item.signature)
      info.parameters.push(...item.paramValue.map((value) => new ParameterInformation(value)))
      signature.signatures.push(info)
      return signature
    }
    const callMethod = this.callChain(document, position.with(position.line, position.character - 1))
    if (callMethod && callMethod.semanticsKind === SemanticsKind.Def) {
      signature.signatures.push(callMethod.signatureInformation!())
      return signature
    }
    return undefined
  }
}

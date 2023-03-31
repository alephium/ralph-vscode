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
import { Func } from './builtIn/func'
import { SemanticsKind } from '../ast/kinder'
import { tryGetContractBuiltInFunction } from './builtIn/contractBuiltIn'

export class RalphSignatureHelpProvider extends Filter implements vscode.SignatureHelpProvider {
  items: Array<Func>

  builtItems: Map<string, Func>

  constructor() {
    super()
    this.builtItems = new Map()
    this.items = Object.assign(new Array<Func>(), jsonData)
    this.items.forEach((item) => this.builtItems.set(`${item?.name}!`, item))
  }

  splitParam(fun: Func) {
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
    const funcName = document.getText(range)
    const item = this.builtItems.get(funcName)
    if (item) {
      this.splitParam(item)
      return this.toSignatureHelp(item)
    }
    if (funcName.endsWith('!')) {
      return this.tryGetContractBuiltIn(document, range, funcName)
    }
    const callMethod = this.callChain(document, position.with(position.line, position.character - 1))
    if (callMethod && callMethod.semanticsKind === SemanticsKind.Def) {
      const signature = new SignatureHelp()
      signature.signatures.push(callMethod.signatureInformation!())
      return signature
    }
    return undefined
  }

  private toSignatureHelp(func: Func): vscode.SignatureHelp {
    const signature = new SignatureHelp()
    const info = new SignatureInformation(func.signature)
    info.parameters.push(...func.paramValue.map((value) => new ParameterInformation(value)))
    signature.signatures.push(info)
    return signature
  }

  private tryGetContractBuiltIn(
    document: vscode.TextDocument,
    range: vscode.Range | undefined,
    funcName: string
  ): SignatureHelp | undefined {
    if (range === undefined) {
      return undefined
    }
    const func = tryGetContractBuiltInFunction(document, range, funcName)
    if (func === undefined) {
      return undefined
    }
    return this.toSignatureHelp(func)
  }
}

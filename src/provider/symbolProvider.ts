import * as vscode from 'vscode'
import Parser from '../parser/parser'
import cache from '../cache/cache'

export class SymbolProvider implements vscode.DocumentSymbolProvider {
  provideDocumentSymbols(document: vscode.TextDocument): vscode.ProviderResult<vscode.DocumentSymbol[] | vscode.SymbolInformation[]> {
    Parser(document.uri, document.getText())
    return cache
      .defs()
      ?.filter((c) => c.getUri?.()?.path === document.uri.path)
      .map((contract) => {
        const item = contract.documentSymbol!()
        if (item) {
          contract.defs?.().forEach((member) => {
            item.children.push(member.documentSymbol!())
          })
        }
        return item
      })
  }
}

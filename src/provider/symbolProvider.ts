import * as vscode from 'vscode'
import Parser from '../parser/parser'
import cache from '../cache/cache'

export class SymbolProvider implements vscode.DocumentSymbolProvider {
  provideDocumentSymbols(document: vscode.TextDocument): vscode.ProviderResult<vscode.DocumentSymbol[] | vscode.SymbolInformation[]> {
    Parser(document.uri, document.getText())
    return Array.from(cache.values())
      .filter((c) => c.getUri()?.path === document.uri.path)
      .map((contract) => contract.documentSymbol())
  }
}

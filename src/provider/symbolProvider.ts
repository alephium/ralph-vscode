import * as vscode from 'vscode'
import { Parser } from '../parser/parser'

export class SymbolProvider implements vscode.DocumentSymbolProvider {
  provideDocumentSymbols(document: vscode.TextDocument): vscode.ProviderResult<vscode.DocumentSymbol[] | vscode.SymbolInformation[]> {
    const parser = new Parser(document.uri, document.getText())
    const items: vscode.DocumentSymbol[] = []
    parser.visitor.structs.forEach((contract) => {
      items.push(contract.documentSymbol(document))
    })
    return items
  }
}

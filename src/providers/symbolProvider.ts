import * as vscode from 'vscode'
import { Parser } from '../parser/parser'

export class SymbolProvider implements vscode.DocumentSymbolProvider {
  provideDocumentSymbols(document: vscode.TextDocument): vscode.ProviderResult<vscode.DocumentSymbol[] | vscode.SymbolInformation[]> {
    const parser = new Parser(document.getText())
    return parser.visitor.DocumentSymbol(document)
  }
}

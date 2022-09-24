import * as vscode from 'vscode'
import { CancellationToken, Definition, DefinitionLink, Position, ProviderResult, TextDocument } from 'vscode'

export class DefinitionProvider implements vscode.DefinitionProvider {
  provideDefinition(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Definition | DefinitionLink[]> {
    const word = document.getWordRangeAtPosition(position)
    return []
  }
}

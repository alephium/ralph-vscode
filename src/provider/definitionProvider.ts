import * as vscode from 'vscode'
import { Definition, DefinitionLink, Position, ProviderResult, TextDocument } from 'vscode'
import { Filter } from './filter'

export class DefinitionProvider extends Filter implements vscode.DefinitionProvider {
  provideDefinition(document: TextDocument, position: Position): ProviderResult<Definition | DefinitionLink[]> {
    return this.callChain(document, position)?.location?.()
  }
}

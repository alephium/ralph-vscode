import { CancellationToken, Definition, DefinitionLink, Position, ProviderResult, TextDocument, TypeDefinitionProvider } from 'vscode'
import { Filter } from './filter'
import cache from '../cache/cache'

export class RalphTypeDefinitionProvider extends Filter implements TypeDefinitionProvider {
  provideTypeDefinition(
    document: TextDocument,
    position: Position,
    token: CancellationToken
  ): ProviderResult<Definition | DefinitionLink[]> {
    const word = this.word(document, position)
    if (word && word.name) return cache.get(word.name)?.location?.()
    return undefined
  }
}

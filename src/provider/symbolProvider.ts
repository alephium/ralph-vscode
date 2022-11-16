import * as vscode from 'vscode'
import { CancellationToken, ProviderResult, SymbolInformation } from 'vscode'
import cache from '../cache/cache'

export class SymbolProvider implements vscode.DocumentSymbolProvider, vscode.WorkspaceSymbolProvider {
  /**
   * Provide symbol information for the given document.
   *
   * @param document The document in which the command was invoked.
   * @param token A cancellation token.
   * @return An array of document highlights or a thenable that resolves to such. The lack of a result can be
   * signaled by returning `undefined`, `null`, or an empty array.
   */
  provideDocumentSymbols(document: vscode.TextDocument): vscode.ProviderResult<vscode.DocumentSymbol[] | vscode.SymbolInformation[]> {
    return cache
      .defs()
      ?.filter((c) => c.getUri?.()?.path === document.uri.path)
      .map((item) => item.documentSymbol!())
  }

  /**
   * Project-wide search for a symbol matching the given query string.
   *
   * The `query`-parameter should be interpreted in a *relaxed way* as the editor will apply its own highlighting
   * and scoring on the results. A good rule of thumb is to match case-insensitive and to simply check that the
   * characters of *query* appear in their order in a candidate symbol. Don't use prefix, substring, or similar
   * strict matching.
   *
   * To improve performance implementors can implement `resolveWorkspaceSymbol` and then provide symbols with partial
   * {@link SymbolInformation.location location}-objects, without a `range` defined. The editor will then call
   * `resolveWorkspaceSymbol` for selected symbols only, e.g. when opening a workspace symbol.
   *
   * @param query A query string, can be the empty string in which case all symbols should be returned.
   * @param token A cancellation token.
   * @return An array of document highlights or a thenable that resolves to such. The lack of a result can be
   * signaled by returning `undefined`, `null`, or an empty array.
   */
  provideWorkspaceSymbols(query: string, token: CancellationToken): ProviderResult<SymbolInformation[]> {
    return cache.findAll({ name: query }).map((value) => value.symbolInformation!())
  }
}

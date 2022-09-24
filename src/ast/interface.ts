import { SymbolKind } from 'vscode'
import { Base } from './base'

export class Interface extends Base {
  kind(): SymbolKind {
    return SymbolKind.Interface
  }
}

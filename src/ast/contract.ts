import { SymbolKind } from 'vscode'
import { Base } from './base'

export class Contract extends Base {
  kind(): SymbolKind {
    return SymbolKind.Class
  }
}

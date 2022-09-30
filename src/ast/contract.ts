import { SymbolKind } from 'vscode'
import { Base } from './base'

export class Contract extends Base {
  symbolKind(): SymbolKind {
    return SymbolKind.Class
  }
}

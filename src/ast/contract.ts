import { SymbolKind } from 'vscode'
import { Base } from './base'

export class Contract extends Base {
  // eslint-disable-next-line class-methods-use-this
  kind(): SymbolKind {
    return SymbolKind.Class
  }
}

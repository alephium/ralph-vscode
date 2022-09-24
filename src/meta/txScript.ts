import { SymbolKind } from 'vscode'
import { Base } from './base'

export class TxScript extends Base {
  main!: string

  kind(): SymbolKind {
    return SymbolKind.Class
  }
}

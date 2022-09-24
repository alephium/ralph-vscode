// import { SymbolKind } from 'vscode'
// import { ParamContext } from '../parser/RalphParser'
// import { Ast } from './ast'
// export class Identifier extends Ast {
//   kind(): SymbolKind {
//     return SymbolKind.Variable
//   }
//
//   public static FromContext(ctx: ParamContext): Identifier {
//     const varVal = new Identifier(ctx.IDENTIFIER().text, ctx.IDENTIFIER().symbol)
//     varVal.detail = ctx.text
//     return varVal
//   }
// }

import { Position, Uri } from 'vscode'

export class Identifier {
  uri: Uri | undefined

  word: string | undefined

  point: Position

  constructor(word: string, point: Position, uri?: Uri) {
    this.uri = uri
    this.word = word
    this.point = point
  }
}

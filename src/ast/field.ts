import { SymbolKind } from 'vscode'
import { ParamContext } from '../parser/RalphParser'
import { Ast } from './ast'

export class Field extends Ast {
  symbolKind(): SymbolKind {
    return SymbolKind.Field
  }

  public static FromContext(ctx: ParamContext): Field {
    const field = new Field(ctx.IDENTIFIER().text, ctx.IDENTIFIER().symbol)
    field.detail = ctx.text
    return field
  }
}

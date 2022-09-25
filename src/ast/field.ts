import { SymbolKind } from 'vscode'
import { Ast } from './ast'
import { ParamContext } from "../parser/RalphParser";

export class Field extends Ast {
  kind(): SymbolKind {
    return SymbolKind.Field
  }

  public static FromContext(ctx: ParamContext): Field {
    const field = new Field(ctx.IDENTIFIER().text, ctx.IDENTIFIER().symbol)
    field.detail = ctx.text
    return field
  }
}

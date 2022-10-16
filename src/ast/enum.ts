import { CompletionItemKind, SymbolKind } from 'vscode'
import { Base } from './base'
import { EnumContext } from '../parser/RalphParser'
import { Variable } from './variable'

export class Enum extends Base {
  symbolKind(): SymbolKind {
    return SymbolKind.Enum
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Enum
  }

  public static FromContext(ctx: EnumContext): Enum {
    const enumValue = new Enum(ctx.IDENTIFIER())
    ctx.varName().forEach((value) => enumValue.add(new Variable(value.IDENTIFIER()).setParent(enumValue)))
    return enumValue
  }
}

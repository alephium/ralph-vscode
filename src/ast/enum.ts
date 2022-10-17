// eslint-disable-next-line max-classes-per-file
import { CompletionItemKind, SymbolKind } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Base } from './base'
import { EnumContext } from '../parser/RalphParser'
import { SemanticNode } from './ast'
import { IdentifierKind } from './identifier'

export class Enum extends Base {
  symbolKind(): SymbolKind {
    return SymbolKind.Enum
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Enum
  }

  public static FromContext(ctx: EnumContext): Enum {
    const enumValue = new Enum(ctx.IDENTIFIER())
    ctx.varNameAssign().forEach((value) => {
      const member = new EnumMember(value.varName().IDENTIFIER()).setParent(enumValue)
      member.detail = value.text
      enumValue.add(member)
    })
    return enumValue
  }
}

class EnumMember extends SemanticNode {
  symbolKind(): SymbolKind {
    return SymbolKind.EnumMember
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.EnumMember
  }

  constructor(node: TerminalNode) {
    super(node)
    this.identifierKind = IdentifierKind.Variable
  }
}

// eslint-disable-next-line max-classes-per-file
import { CompletionItemKind, SymbolKind } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Base } from './base'
import { EnumContext } from '../parser/RalphParser'
import { SemanticNode } from './ast'
import { IdentifierKind } from './kinder'
import { Identifier } from './identifier'

export class Enum extends Base {
  symbolKind(): SymbolKind {
    return SymbolKind.Enum
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Enum
  }

  constructor(node: TerminalNode) {
    super(node)
    this.identifierKind = IdentifierKind.Enum
  }

  public static FromContext(ctx: EnumContext): Enum {
    const enumValue = new Enum(ctx.IDENTIFIER())
    enumValue.ruleContext = ctx
    ctx
      .varNameAssign()
      .forEach((value) => enumValue.add(new EnumMember(value.varName().IDENTIFIER()).setParent(enumValue).setRuleContext(value)))
    return enumValue
  }

  getType(): Identifier | undefined {
    return this
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

  getType(): Identifier | undefined {
    return this.parent
  }
}

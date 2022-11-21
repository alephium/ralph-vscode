// eslint-disable-next-line max-classes-per-file
import { CompletionItemKind, SymbolKind } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Interval } from 'antlr4ts/misc/Interval'
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
    enumValue.setRuleContext(ctx)
    enumValue.setRange(ctx.start, ctx.stop)
    enumValue._sourceIntervalDetail = new Interval(ctx.ENUM().sourceInterval.a, ctx.IDENTIFIER().sourceInterval.b)
    ctx.varNameAssign().forEach((ctx) => {
      const member = new EnumMember(ctx.varName().IDENTIFIER()).setParent(enumValue).setRuleContext(ctx)
      member._sourceIntervalDetail = ctx.sourceInterval
      member.setRuleContext(ctx)
      member.setRange(ctx.start, ctx.stop)
      enumValue.add(member)
    })
    return enumValue
  }

  getType(): Identifier | undefined {
    return this
  }
}

export class EnumMember extends SemanticNode {
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

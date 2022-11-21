import { CompletionItemKind, SymbolKind } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { SemanticNode } from './ast'
import { IdentifierKind } from './kinder'
import { EventContext } from '../parser/RalphParser'

export class Event extends SemanticNode {
  symbolKind(): SymbolKind {
    return SymbolKind.Event
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Event
  }

  constructor(node: TerminalNode) {
    super(node)
    this.identifierKind = IdentifierKind.Event
  }

  public static FromContext(ctx: EventContext): Event {
    const event = new Event(ctx.IDENTIFIER())
    event.setRuleContext(ctx)
    event.setRange(ctx.start, ctx.stop)
    event._sourceIntervalDetail = ctx.sourceInterval
    return event
  }
}

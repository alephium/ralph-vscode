import { CompletionItemKind, SymbolKind } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { IdentifierKind } from './kinder'
import { EventContext } from '../parser/RalphParser'
import { Base } from './base'
import { Context } from './context'

export class Event extends Base {
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
    const context = new Context(event)
    event.identifiers.push(...context.paramListContext(ctx.paramList()))
    return event
  }
}

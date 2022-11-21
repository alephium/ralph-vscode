import { CompletionItemKind, DocumentSymbol, SymbolKind } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Identifier } from './identifier'
import { IdentifierKind, SemanticsKind } from './kinder'
import { SemanticNode } from './ast'
import { Word } from './word'
import { Finder } from './finder'
import { Position } from './position'
import { RalphParser } from '../parser/RalphParser'

export class Base extends SemanticNode implements Finder {
  // TODO Fix use set
  members: Map<string, Identifier>

  identifiers: Identifier[]

  _parser?: RalphParser

  constructor(node?: TerminalNode) {
    super(node)
    this.members = new Map()
    this.kind = IdentifierKind.Type
    this.identifiers = []
  }

  add(member: Identifier) {
    if (member && member.name) {
      this.members.set(member.name, member)
    }
  }

  append(...identifiers: Identifier[]) {
    identifiers.forEach((value) => value && this.identifiers.push(value))
  }

  getChild(): Identifier[] {
    return Array.from(this.members.values())
  }

  container(position: Position): Identifier | undefined {
    if (this.contains(position)) {
      for (const value of this.members.values()) {
        const obj = value.container?.(position)
        if (obj) return obj
      }
      return this
    }
    return undefined
  }

  findAll(identifier: Word): Identifier[] {
    const items: Identifier[] = []
    if (this.name === identifier.name) items.push(this)
    this.members.forEach((member) => {
      const is = member.findAll?.(identifier)
      if (is) items.push(...is)
    })
    this.identifiers.forEach((value) => {
      if (value.name === identifier.name) items.push(value)
    })
    return items
  }

  find?(word: Word): Identifier | undefined {
    if (this.contains(word)) {
      for (const value of this.members.values()) {
        const member = value.find?.(word)
        if (member) return member
      }
      for (const value of this.identifiers.values()) {
        const member = value.find?.(word)
        if (member) return member
      }
    }
    return super.find?.(word)
  }

  defs(): Identifier[] {
    const members = Array.from(this.members.values())
    const identifiers = this.identifiers.filter((value) => value && value.semanticsKind && value.semanticsKind === SemanticsKind.Def)
    return members.concat(identifiers)
  }

  def(word: Word): Identifier | undefined {
    if (this.contains(word)) {
      for (const member of this.members.values()) {
        const def = member.def?.(word)
        if (def) return def
      }
      const member = this.members.get(word.name!)
      if (member && member.isDef!() && member.contains!(word)) {
        return member
      }
    }
    return super.def(word)
  }

  ref(): Identifier[] {
    return Array.from(this.identifiers.values())
  }

  symbolKind(): SymbolKind {
    return SymbolKind.Class
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Class
  }

  parser(): RalphParser | undefined {
    if (this._parser) {
      return this._parser
    }
    return super.parser()
  }

  documentSymbol(): DocumentSymbol {
    const doc = super.documentSymbol()
    doc.children = Array.from(this.members.values()).map((child) => child.documentSymbol!())
    return doc
  }
}

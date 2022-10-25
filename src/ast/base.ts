import * as vscode from 'vscode'
import { CompletionItemKind, Definition, DefinitionLink, Location, ProviderResult, SymbolKind, TextDocument, WorkspaceEdit } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Identifier } from './identifier'
import { IdentifierKind, SemanticsKind } from './kinder'
import { SemanticNode } from './ast'
import { Word } from './word'
import { Finder } from './finder'
import { Position } from './position'
import { RalphParser } from '../parser/RalphParser'

export class Base extends SemanticNode implements VscodeInterface, Finder {
  // TODO Fix use set
  members: Map<string, Identifier>

  identifiers: Identifier[]

  _parser?: RalphParser

  constructor(node: TerminalNode) {
    super(node)
    this.members = new Map()
    this.kind = IdentifierKind.Type
    this.identifiers = []
  }

  add(member: Identifier) {
    this.members.set(member.name!, member)
  }

  append(...identifiers: Identifier[]) {
    this.identifiers.push(...identifiers)
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

  defs(): Identifier[] | undefined {
    const member = Array.from(this.members.values())
    const identifiers = this.identifiers.filter(
      (value) => value.identifierKind === IdentifierKind.Variable && value.semanticsKind === SemanticsKind.Def
    )
    return member.concat(identifiers)
  }

  def(word: Word): Identifier | undefined {
    if (this.contains(word)) {
      const member = this.members.get(word.name!)
      if (member && member.isDef!()) {
        return member
      }
      for (const member of this.members.values()) {
        const def = member.def?.(word)
        if (def) return def
      }
    }
    return super.def(word)
  }

  ref(): Identifier[] | undefined {
    return Array.from(this.identifiers.values())
  }

  symbolKind(): SymbolKind {
    return SymbolKind.Class
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Class
  }

  provideDocumentSymbols(document?: vscode.TextDocument): vscode.DocumentSymbol {
    const item = this.documentSymbol()
    this.members.forEach((member) => {
      item.children.push(member.documentSymbol!())
    })
    return item
  }

  provideRenameEdits(identifier: Word, newName: string, edit: WorkspaceEdit): void {
    const members = this.findAll(identifier)
    if (members && members.length > 0) {
      members?.forEach((member) => edit.replace(<vscode.Uri>member.getUri?.(), member.range!, newName))
    }
  }

  parser(): RalphParser | undefined {
    if (this._parser) {
      return this._parser
    }
    return super.parser()
  }
}

export interface VscodeInterface {
  provideDocumentSymbols?(document?: vscode.TextDocument): vscode.DocumentSymbol
  provideHover?(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover>
  provideDefinition?(document: TextDocument, position: vscode.Position): ProviderResult<Definition | DefinitionLink[]>
  provideRenameEdits?(identifier: Identifier, newName: string, edit: WorkspaceEdit): void
}

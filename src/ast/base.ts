import * as vscode from 'vscode'
import { CompletionItemKind, Definition, DefinitionLink, Location, ProviderResult, SymbolKind, TextDocument, WorkspaceEdit } from 'vscode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Identifier } from './identifier'
import { IdentifierKind, SemanticsKind } from './kinder'
import { SemanticNode } from './ast'
import { Word } from './word'
import { Finder } from './finder'
import { Position } from './position'

export class Base extends SemanticNode implements VscodeInterface, Finder {
  // TODO Fix use set
  members: Map<string, Identifier>

  identifiers: Identifier[]

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

  // override
  findOne(word: Word): Identifier | undefined {
    if (this.contains(word)) {
      if (this.name === word.name) return this
      const member = this.members.get(word.name)
      if (!member) {
        for (const member of this.members.values()) {
          const one = member.findOne?.(word)
          if (one) return one
        }
      } else {
        return member
      }
    }
    return undefined
  }

  findAll(identifier: Word): Identifier[] | undefined {
    const items: Identifier[] = []
    if (this.contains(identifier)) {
      if (this.name === identifier.name) items.push(this)
      this.members.forEach((member) => {
        const is = member.findAll?.(identifier)
        if (is) items.push(...is)
      })
    }
    if (items.length > 0) {
      return items
    }
    return undefined
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
      for (const member of this.members.values()) {
        const def = member.def?.(word)
        if (def) return def
      }
      return super.def(word)
    }
    return undefined
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

  provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    const range = document.getWordRangeAtPosition(position)
    const word = <Word>{
      name: document.getText(range),
      point: position,
      uri: document.uri,
    }
    let item
    const member = this.findOne(word)
    if (member) {
      item = new vscode.Hover([member.name!, member.detail ?? ''])
    }
    return item
  }

  provideDefinition(document: TextDocument, position: vscode.Position): ProviderResult<Definition | DefinitionLink[]> {
    const range = document.getWordRangeAtPosition(position)
    const word = <Word>{
      name: document.getText(range),
      point: position,
      uri: document.uri,
    }
    let item
    const member = this.findOne(word)
    if (member) {
      item = new Location(member.uri ?? document.uri, member.range ?? position)
    }
    return item
  }

  provideRenameEdits(identifier: Word, newName: string, edit: WorkspaceEdit): void {
    const members = this.findAll(identifier)
    if (members && members.length > 0) {
      members?.forEach((member) => edit.replace(<vscode.Uri>member.getUri?.(), member.range!, newName))
    }
  }
}

export interface VscodeInterface {
  provideDocumentSymbols?(document?: vscode.TextDocument): vscode.DocumentSymbol
  provideHover?(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover>
  provideDefinition?(document: TextDocument, position: vscode.Position): ProviderResult<Definition | DefinitionLink[]>
  provideRenameEdits?(identifier: Identifier, newName: string, edit: WorkspaceEdit): void
}

import { Token } from 'antlr4ts/Token'
import * as vscode from 'vscode'
import { CompletionItemKind, Definition, DefinitionLink, Location, ProviderResult, SymbolKind, TextDocument, WorkspaceEdit } from 'vscode'
import { Identifier, IdentifierKind, SemanticsKind } from './identifier'
import { SemanticNode } from './ast'
import { Word } from './word'
import { Finder } from './finder'
import { Position } from './position'

export class Base extends SemanticNode implements VscodeInterface, Finder {
  members: Map<string, Identifier>

  identifiers: Identifier[]

  constructor(name?: string, token?: Token) {
    super(name, token)
    this.members = new Map()
    this.kind = IdentifierKind.Type
    this.identifiers = []
  }

  add(member: Identifier) {
    this.members.set(member.name, member)
  }

  append(identifiers: Identifier[]) {
    this.identifiers.push(...identifiers)
  }

  getChild(): Identifier[] {
    return Array.from(this.members.values())
  }

  container(position?: Position): Identifier | undefined {
    if (!position) {
      return this.parent
    }
    if (this.isScope(position)) {
      const obj = Array.from(this.members.values()).find((member) => member.isScope?.(position))
      if (obj) {
        return obj
      }
      return this
    }
    return undefined
  }

  // override
  findOne(identifier: Word): Identifier | undefined {
    if (this.isScope(identifier)) {
      if (this.name === identifier.name) return this
      const member = this.members.get(<string>identifier.name)
      if (!member) {
        for (const member of this.members.values()) {
          const ast = member.findOne?.(identifier)
          if (ast) return ast
        }
      } else {
        return member
      }
    }
    return undefined
  }

  findAll(identifier: Word): Identifier[] | undefined {
    const items: Identifier[] = []
    if (this.isScope(identifier)) {
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

  def(condition: Word): Identifier[] | undefined {
    const member = Array.from(this.members.values())
    const identifiers = this.identifiers.filter(
      (value) => value.identifierKind === IdentifierKind.Variable && value.semanticsKind === SemanticsKind.Def
    )
    return member.concat(identifiers)
  }

  ref(condition: Word): Identifier[] | undefined {
    return Array.from(this.identifiers.values())
  }

  symbolKind(): SymbolKind {
    return SymbolKind.Class
  }

  completionItemKind(): CompletionItemKind {
    return CompletionItemKind.Class
  }

  documentSymbol(document?: vscode.TextDocument): vscode.DocumentSymbol {
    const item = new vscode.DocumentSymbol(this.name, '', this.symbolKind(), this.scope!, this.scope!)
    this.members.forEach((member) => {
      item.children.push(
        new vscode.DocumentSymbol(member.name, member.detail!, <SymbolKind>member.symbolKind?.(), member.scope!, member.scope!)
      )
    })
    return item
  }

  provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    const range = document.getWordRangeAtPosition(position)
    const identifier = <Word>{
      name: document.getText(range),
      point: position,
      uri: document.uri,
    }
    let item
    const member = this.findOne(identifier)
    if (member) {
      item = new vscode.Hover([member.name, member.detail ?? ''])
    }
    return item
  }

  provideDefinition(document: TextDocument, position: vscode.Position): ProviderResult<Definition | DefinitionLink[]> {
    const range = document.getWordRangeAtPosition(position)
    const identifier = <Word>{
      name: document.getText(range),
      point: position,
      uri: document.uri,
    }
    let item
    const member = this.findOne(identifier)
    if (member) {
      item = new Location(member.uri ?? document.uri, member.scope ?? position)
    }
    return item
  }

  provideRenameEdits(identifier: Word, newName: string, edit: WorkspaceEdit): void {
    const members = this.findAll(identifier)
    if (members && members.length > 0) {
      members?.forEach((member) => edit.replace(<vscode.Uri>member.getUri?.(), member.scope!, newName))
    }
  }
}

export interface VscodeInterface {
  documentSymbol?(document?: vscode.TextDocument): vscode.DocumentSymbol
  provideHover?(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover>
  provideDefinition?(document: TextDocument, position: vscode.Position): ProviderResult<Definition | DefinitionLink[]>
  provideRenameEdits?(identifier: Identifier, newName: string, edit: WorkspaceEdit): void
}

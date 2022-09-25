import { Token } from 'antlr4ts/Token'
import * as vscode from 'vscode'
import { Definition, DefinitionLink, Location, Position, ProviderResult, SymbolKind, TextDocument, WorkspaceEdit } from 'vscode'
import { Ast, IAst } from './ast'
import { Identifier } from './identifier'

export class Base extends Ast implements VscodeInterface {
  members: Map<string, IAst>

  constructor(name: string, token: Token) {
    super(name, token)
    this.members = new Map()
    // this.members.set(this.name, this)
  }

  getChild(): IAst[] {
    return Array.from(this.members.values())
  }

  // override
  findOne(identifier: Identifier): IAst | undefined {
    if (this.contains(identifier)) {
      if (this.name === identifier.name) return this
      const member = this.members.get(<string>identifier.name)
      if (!member) {
        for (const member of this.members.values()) {
          const ast = member.findOne?.(identifier)
          if (ast) return ast
        }
      } else {
        console.log(`find success! ${member.name}`)
        return member
      }
    }
    return undefined
  }

  findAll(identifier: Identifier): IAst[] | undefined {
    let items: IAst[] = []
    if (this.contains(identifier)) {
      if (this.name === identifier.name) items.push(this)
      this.members.forEach((member) => {
        const is = member.findAll?.(identifier)
        if (is) items = items.concat(is)
      })
    }
    if (items.length > 0) {
      return items
    }
    return undefined
  }

  add(ast: IAst) {
    this.members.set(ast.name, ast)
  }

  documentSymbol(document: vscode.TextDocument): vscode.SymbolInformation[] {
    const items: vscode.SymbolInformation[] = []
    this.members.forEach((member) => {
      items.push(
        new vscode.SymbolInformation(
          member.name,
          <SymbolKind>member.kind?.(),
          this.name,
          new vscode.Location(document.uri, member.position())
        )
      )
    })
    items.push(new vscode.SymbolInformation(this.name, SymbolKind.Class, '', new vscode.Location(document.uri, this.position())))
    return items
  }

  provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    const range = document.getWordRangeAtPosition(position)
    const identifier = new Identifier(document.getText(range), position, document.uri)
    console.log(`identifier = ${JSON.stringify(identifier, null, 2)}`)
    let item
    const member = this.findOne(identifier)
    if (member) {
      console.log(member.toString!())
      item = new vscode.Hover([member.name, member.detail ?? ''])
    }
    return item
  }

  provideDefinition(document: TextDocument, position: Position): ProviderResult<Definition | DefinitionLink[]> {
    const range = document.getWordRangeAtPosition(position)
    const identifier = new Identifier(document.getText(range), position, document.uri)
    let item
    const member = this.findOne(identifier)
    if (member) {
      console.log(member.toString!())
      item = new Location(member.uri ?? document.uri, member.scope ?? position)
    }
    return item
  }

  provideRenameEdits(identifier: Identifier, newName: string, edit: WorkspaceEdit): void {
    const members = this.findAll(identifier)
    if (members && members.length > 0) {
      console.log(members)
      members?.forEach((member) => edit.replace(<vscode.Uri>member.getUri?.(), member.scope!, newName))
    }
  }
}

export interface VscodeInterface {
  documentSymbol?(document: vscode.TextDocument): vscode.SymbolInformation[]
  provideHover?(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover>
  provideDefinition?(document: TextDocument, position: Position): ProviderResult<Definition | DefinitionLink[]>
  provideRenameEdits?(identifier: Identifier, newName: string, edit: WorkspaceEdit): void
}

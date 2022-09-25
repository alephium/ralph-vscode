import { RenameProvider, WorkspaceEdit, TextDocument, Uri, CancellationToken, Position, Range, ProviderResult } from 'vscode'
import * as vscode from 'vscode'
import { Parser } from '../parser/parser'
import { Identifier } from '../ast/identifier'

export class RalphRenameProvider implements RenameProvider {
  provideRenameEdits(document: TextDocument, position: Position, newName: string): ProviderResult<WorkspaceEdit> {
    const parser = new Parser(document.uri, document.getText())
    const range = document.getWordRangeAtPosition(position)
    const identifier = new Identifier(document.getText(range), position, document.uri)
    const edit = new WorkspaceEdit()
    parser.visitor.structs.forEach((item) => item.provideRenameEdits(identifier, newName, edit))
    return edit
  }

  // prepareRename(document: TextDocument, position: Position): ProviderResult<Range | { range: Range; placeholder: string }> {
  //   const parser = new Parser(document.uri, document.getText())
  //   const range = document.getWordRangeAtPosition(position)
  //   const identifier = new Identifier(document.getText(range), position, document.uri)
  //
  //   parser.visitor.structs.forEach((item) => {
  //     const all = item.findAll(identifier)
  //     if(all){
  //       return all[0]?.scope
  //     }
  //   })
  // return undefined
  // }
}

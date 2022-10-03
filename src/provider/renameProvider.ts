import { RenameProvider, WorkspaceEdit, TextDocument, Position, ProviderResult } from 'vscode'
import Parser from '../parser/parser'
import { Identifier } from '../ast/identifier'
import cache from '../cache/cache'

export class RalphRenameProvider implements RenameProvider {
  provideRenameEdits(document: TextDocument, position: Position, newName: string): ProviderResult<WorkspaceEdit> {
    const range = document.getWordRangeAtPosition(position)
    const identifier = <Identifier>{
      name: document.getText(range),
      point: position,
      uri: document.uri,
    }
    const edit = new WorkspaceEdit()
    Parser(document.uri, document.getText())
    cache.forEach((item) => item.provideRenameEdits(identifier, newName, edit))
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

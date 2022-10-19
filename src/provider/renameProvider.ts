import vscode, { RenameProvider, WorkspaceEdit, TextDocument, Position, ProviderResult } from 'vscode'
import Parser from '../parser/parser'
import cache from '../cache/cache'
import { Filter } from './filter'

export class RalphRenameProvider extends Filter implements RenameProvider {
  provideRenameEdits(document: TextDocument, position: Position, newName: string): ProviderResult<WorkspaceEdit> {
    const word = this.word(document, position)
    if (word) {
      const edit = new WorkspaceEdit()
      Parser(document.uri, document.getText())
      cache.forEach((value) => {
        const members = value.findAll(word)
        if (members) {
          members.forEach((member) => edit.replace(<vscode.Uri>member.getUri?.(), member.range!, newName))
        }
      })
      return edit
    }
    return undefined
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

import { Position, TextDocument } from 'vscode'
import { Word } from '../ast/word'

export class Filter {
  isSkip(document: TextDocument, position: Position): boolean {
    const { text } = document.lineAt(position)
    if (text) {
      return text.indexOf('//') >= 0 && text.indexOf('//') < position.character
    }
    return true
  }

  word(document: TextDocument, position: Position, offset = 0): Word | undefined {
    if (this.isSkip(document, position)) return undefined
    const range = document.getWordRangeAtPosition(position.with(position.line, position.character + offset))
    return <Word>{
      name: document.getText(range),
      point: position,
      uri: document.uri,
    }
  }
}

import { Position, TextDocument } from 'vscode'

export class Filter {
  isSkip(document: TextDocument, position: Position): boolean {
    const { text } = document.lineAt(position)
    if (text) {
      return text.indexOf('//') >= 0 && text.indexOf('//') < position.character
    }
    return true
  }
}

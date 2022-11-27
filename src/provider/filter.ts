import { Position, TextDocument } from 'vscode'
import { Word } from '../ast/word'
import { Identifier } from '../ast/identifier'
import cache from '../cache/cache'
import { Base } from '../ast/base'

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

  callChain(document: TextDocument, position: Position): Identifier | undefined {
    if (this.isSkip(document, position)) return undefined
    const callChain = document.getText(document.getWordRangeAtPosition(position, /[a-zA-Z][0-9a-zA-Z.]*/i))
    const positionWord = document.getText(document.getWordRangeAtPosition(position, /[a-zA-Z][0-9a-zA-Z]*/i))
    let wordSet = callChain.split('.')
    wordSet = wordSet.slice(0, wordSet.indexOf(positionWord) + 1)
    const word = {
      name: wordSet[0],
      point: position,
      uri: document.uri,
    }
    let caller = cache.def(document.uri, word)
    let i = 0
    while (true) {
      if (wordSet.length - 1 === i) {
        return caller
      }
      const type_ = caller?.getType?.()
      if (type_ instanceof Base) {
        i += 1
        caller = type_.members.get(wordSet[i])
      } else {
        return undefined
      }
    }
  }
}

import { Position, TextDocument } from 'vscode'
import { Word } from '../ast/word'
import { Identifier } from '../ast/identifier'
import cache from '../cache/cache'
import { Base } from '../ast/base'
import Parser from '../parser/parser'

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

  getDef(word: Word): Identifier | undefined {
    for (const value of cache.values()) {
      const member = value.def(word)
      if (member) return member
    }
    return undefined
  }

  callChain(document: TextDocument, position: Position): Identifier | undefined {
    if (this.isSkip(document, position)) return undefined
    Parser(document.uri, document.getText())
    const callChain = document.getText(document.getWordRangeAtPosition(position, /[a-zA-Z][0-9a-zA-Z.]*/i))
    const wordSet = callChain.split('.')
    let caller = this.getDef({
      name: wordSet[0],
      point: position,
      uri: document.uri,
    })
    if (wordSet.length === 1) return caller
    if (wordSet.length > 1) {
      let i = 1
      while (true) {
        const type_ = caller?.getType?.()
        if (type_ instanceof Base) {
          caller = type_.members.get(wordSet[i])
          if (wordSet.length - 1 === i) {
            return caller
          }
          i += 1
        } else {
          return undefined
        }
      }
    }
    return undefined
  }
}

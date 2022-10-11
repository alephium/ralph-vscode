import { Parser, ParserOptions } from 'prettier'
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { locStart, locEnd } from './loc'
import { RalphParser } from '../parser/RalphParser'
import { RalphLexer } from '../parser/RalphLexer'

export const parsers: Record<string, Parser> = {
  ralph: {
    parse,
    locStart,
    locEnd,
    astFormat: 'ralph-ast',
  },
}

export function parse(text: string, parsers: any, options: any) {
  // Create the lexer and parser
  const inputStream = CharStreams.fromString(text)
  const lexer = new RalphLexer(inputStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new RalphParser(tokenStream)
  // Parse the input, where `sourceFile` is whatever entry point you defined
  const tree = parser.sourceFile()
}

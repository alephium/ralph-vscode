import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { RalphLexer } from './RalphLexer'
import { RalphParser } from './RalphParser'
import { RalphVisitor } from '../visitors/ralphVisitor'

export class Parser {
  visitor: RalphVisitor

  constructor(text: string) {
    // Create the lexer and parser
    const inputStream = CharStreams.fromString(text)
    const lexer = new RalphLexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const parser = new RalphParser(tokenStream)

    // Parse the input, where `sourceFile` is whatever entry point you defined
    const tree = parser.sourceFile()

    this.visitor = new RalphVisitor()
    this.visitor.visit(tree)
  }
}
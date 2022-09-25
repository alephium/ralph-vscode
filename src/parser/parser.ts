import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { Uri } from 'vscode'
import { RalphLexer } from './RalphLexer'
import { RalphParser } from './RalphParser'
import { RalphVisitor } from '../visitors/ralphVisitor'

export class Parser {
  visitor: RalphVisitor

  constructor(uri: Uri, text: string) {
    // Create the lexer and parser
    const inputStream = CharStreams.fromString(text)
    const lexer = new RalphLexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const parser = new RalphParser(tokenStream)

    // Parse the input, where `sourceFile` is whatever entry point you defined
    const tree = parser.sourceFile()

    this.visitor = new RalphVisitor(uri)
    this.visitor.visit(tree)
  }
}

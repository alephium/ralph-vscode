import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { Uri } from 'vscode'
import { RalphLexer } from './RalphLexer'
import { RalphParser } from './RalphParser'
import { RalphVisitor } from '../visitors/ralphVisitor'

export default function Parser(uri: Uri, text: string) {
  // Create the lexer and parser
  const charStream = CharStreams.fromString(text, uri.path)
  const lexer = new RalphLexer(charStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new RalphParser(tokenStream)
  // Parse the input, where `sourceFile` is whatever entry point you defined
  const tree = parser.sourceFile()
  const visitor = new RalphVisitor(uri, parser, lexer, charStream, tokenStream)
  visitor.visit(tree)
}

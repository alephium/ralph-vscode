import { CharStreams, CommonTokenStream } from 'antlr4ts'
// import { Uri, workspace } from 'vscode'

import { EmitVisitor } from '../src/visitors/emit'

import { RalphLexer } from '../src/parser/RalphLexer'
import { RalphParser } from '../src/parser/RalphParser'


it('event visit', async () => {
  // const uri = Uri.file('./contracts/sub/sub.ral')
  // const doc = await workspace.openTextDocument(uri)
  const inputStream = CharStreams.fromString("")
  const lexer = new RalphLexer(inputStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new RalphParser(tokenStream)
  // Parse the input, where `sourceFile` is whatever entry point you defined
  const tree = parser.emit()
  // const visitor = new EmitVisitor(uri)
  // visitor.visit(tree)
  // jasmine.pp(visitor.cache)
}, 3)

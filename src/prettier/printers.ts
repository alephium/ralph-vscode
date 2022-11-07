import { Printer, AstPath, Doc, ParserOptions, doc } from 'prettier'

const { concat } = doc.builders

export const printers: Record<string, Printer> = {
  'ralph-ast': {
    print,
  },
}

function print(path: AstPath, options: ParserOptions, print: (path: AstPath) => Doc): Doc {
  return ''
}

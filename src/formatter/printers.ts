import { Printer, AstPath, Doc, ParserOptions, doc } from 'prettier'

const { concat } = doc.builders

export const printers: Record<string, Printer> = {
  'ralph-ast': {
    print,
  },
}

function print(path: AstPath, _options: ParserOptions, _print: (path: AstPath) => Doc): Doc {
  return ''
}

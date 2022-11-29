import vscode, { Diagnostic, TextDocument } from 'vscode'
import cache from './cache/cache'

function isUpperCase(ch: string) {
  return ch >= 'A' && ch <= 'Z'
}

function isLowerCase(ch: string) {
  return ch >= 'a' && ch <= 'z'
}

export function analyseDiagnostic() {
  upperCamelCase()
}

function upperCamelCase() {
  cache.defs().forEach((value) => {
    if (!isUpperCase(value.name!.charAt(0))) {
      const diagnosticCollection = vscode.languages.createDiagnosticCollection('ralph')
      diagnosticCollection.set(value.uri!, [
        new Diagnostic(
          new vscode.Range(value.range!.start, value.range!.start.with({ character: value.name!.length })),
          'upper camel case'
        ),
      ])
    }
  })
}

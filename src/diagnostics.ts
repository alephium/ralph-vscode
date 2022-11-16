import vscode, { Diagnostic } from 'vscode'
import cache from './cache/cache'
import Parser from './parser/parser'

function isUpperCase(ch: string) {
  return ch >= 'A' && ch <= 'Z'
}

function isLowerCase(ch: string) {
  return ch >= 'a' && ch <= 'z'
}

export function analyseDiagnostic() {
  upperCamelCase()
  vscode.workspace.onDidChangeTextDocument((event) => {
    const identifiers = Parser(event.document.uri, event.document.getText())
    cache.merge(event.document.uri, identifiers)
  })
  vscode.workspace.onDidSaveTextDocument((doc) => {
    upperCamelCase()
  })
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

// const watcher = vscode.workspace.createFileSystemWatcher('**/*.ral')
// watcher.onDidChange((uri) => )

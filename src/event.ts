import vscode, { TextDocument } from 'vscode'
import cache from './cache/cache'
import Parser from './parser/parser'
import { analyseDiagnostic } from './diagnostics'

export function registerEvent() {
  vscode.workspace.onDidChangeTextDocument((event) => parser(event.document))
  vscode.workspace.onDidOpenTextDocument((doc) => parser(doc))
  vscode.workspace.onDidCloseTextDocument((doc) => parser(doc))
  vscode.workspace.onDidDeleteFiles((events) => events.files.forEach((e) => cache.remove(e)))
  vscode.workspace.onDidSaveTextDocument((doc) => {
    parser(doc)
    analyseDiagnostic()
  })
  vscode.workspace.onDidRenameFiles(async (events) => {
    events.files.forEach(async (value) => {
      cache.remove(value.oldUri)
      const doc = await vscode.workspace.openTextDocument(value.newUri)
      parser(doc)
    })
  })
}

function parser(doc: TextDocument) {
  const identifiers = Parser(doc.uri, doc.getText())
  cache.merge(doc.uri, identifiers)
}

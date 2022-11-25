import vscode, { TextDocument } from 'vscode'
import * as path from 'path'
import cache from './cache/cache'
import Parser from './parser/parser'
import { analyseDiagnostic } from './diagnostics'
import { global } from './config/global'

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
  vscode.window.onDidChangeActiveTextEditor((event) => {
    if (event) {
      parser(event.document)
    }
  })
  vscode.window.onDidChangeVisibleTextEditors((editors) => editors.forEach((editor) => parser(editor.document)))
}

export function parser(doc: TextDocument) {
  if (includes(doc.uri.path) && !doc.isDirty && doc.languageId === 'ralph') {
    const identifiers = Parser(doc.uri, doc.getText())
    cache.merge(doc.uri, identifiers)
  }
}

function includes(file: string): boolean {
  if (vscode.workspace.rootPath && global.contractsDir) {
    return file.includes(path.join(vscode.workspace.rootPath, global.contractsDir))
  }
  return true
}

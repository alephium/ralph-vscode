import * as vscode from 'vscode'
import commands from './commander/commands'
import { FormatterProvider } from './formatter/formatter'
import { Providers as hoverProvider } from './provider/hover/providers'
import { SymbolProvider } from './provider/symbolProvider'
import { CompletionProvider } from './provider/completionProvider'
import { DefinitionProvider } from './provider/definitionProvider'
import { RalphRenameProvider } from './provider/renameProvider'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension is now active!')

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  commands.forEach((value) => {
    context.subscriptions.push(vscode.commands.registerCommand(value.command, value.callback))
  })

  const selector = { scheme: 'file', language: 'ralph' }
  hoverProvider().forEach((value) => context.subscriptions.push(vscode.languages.registerHoverProvider(selector, value)))
  context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider(selector, new FormatterProvider()))
  context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(selector, new SymbolProvider()))
  context.subscriptions.push(vscode.languages.registerCompletionItemProvider(selector, new CompletionProvider()))
  context.subscriptions.push(vscode.languages.registerDefinitionProvider(selector, new DefinitionProvider()))
  context.subscriptions.push(vscode.languages.registerRenameProvider(selector, new RalphRenameProvider()))

  console.log('register push completed!')
}

// this method is called when your extension is deactivated
export function deactivate() {}

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import commands from './commands'
import { FormatterProvider } from './formatter'
import { Providers as hoverProvider } from './providers/hover/providers'

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
  vscode.languages.registerDocumentFormattingEditProvider(selector, new FormatterProvider())
}

// this method is called when your extension is deactivated
export function deactivate() {}

'use strict';

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
// import commands from "./commands";
import { SFormatterProvider } from './formatter';
import { Downloader } from './downloader';
import { Complier } from './compiler';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  context.subscriptions.push(
    vscode.commands.registerCommand('ralph.downloader', () => {
      const download = new Downloader();
      download.showQuickPick();
    }),
    vscode.commands.registerCommand('ralph.compile', () => {
      vscode.window.activeTextEditor &&
        new Complier().complier(vscode.window.activeTextEditor);
    })
  );
  vscode.languages.registerDocumentFormattingEditProvider(
    { scheme: 'file', language: 'ralph' },
    new SFormatterProvider()
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}

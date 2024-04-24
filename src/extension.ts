import * as vscode from 'vscode'
import { commands } from './commander/commands'
import { FormatterProvider } from './formatter/formatter'
import { Providers as hoverProvider } from './provider/hover/providers'
import { SymbolProvider } from './provider/symbolProvider'
import { GlobalProvider } from './provider/completion/globalProvider'
import { DefinitionProvider } from './provider/definitionProvider'
import { RalphRenameProvider } from './provider/renameProvider'
import { BuiltInProvider } from './provider/completion/builtInProvider'
import { IdentifierProvider } from './provider/completion/identifierProvider'
import { EnumProvider } from './provider/completion/enumProvider'
import { AnnotationProvider } from './provider/completion/annotationProvider'
import { MemberProvider } from './provider/completion/memberProvider'
import { RalphSignatureHelpProvider } from './provider/signatureHelpProvider'
import { RalphImplementationProvider } from './provider/implementationProvider'
import { RalphTypeDefinitionProvider } from './provider/typeDefinitionProvider'
import { RalphReferenceProvider } from './provider/referenceProvider'
import { RalphTypeHierarchyProvider } from './provider/typeHierarchyProvider'
import { analyseDiagnostic } from './diagnostics'
import cache from './cache/cache'
import { EmitProvider } from './provider/completion/emitProvider'
import { parser, registerEvent } from './event'
import { ContractBuiltInProvider } from './provider/completion/contractBuiltinProvider'
import {LanguageClient, LanguageClientOptions, ServerOptions, TransportKind} from 'vscode-languageclient/node';

let client: LanguageClient;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension is now active!')

  await init()
  registerEvent()
  analyseDiagnostic()

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  commands.forEach((value) => {
    context.subscriptions.push(vscode.commands.registerCommand(value.command, value.callback))
  })

  const selector = { scheme: 'file', language: 'ralph' }
  context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider(selector, new FormatterProvider()))
  context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(selector, new SymbolProvider()))
  context.subscriptions.push(vscode.languages.registerWorkspaceSymbolProvider(new SymbolProvider()))

  console.log('register push completed!')

  console.log("Activating Ralph LSP client");

    const serverOptions: ServerOptions = {
       command: "ralph-lsp",
       transport: TransportKind.stdio,
        options: {
          shell: true
        }
    };

    const clientOptions: LanguageClientOptions = {
        documentSelector: [
            {pattern: '**/*.ral'},
            {language: 'json', pattern: '**/ralph.json'},
        ]
    };

    // Create the client and store it.
    client = new LanguageClient(
        'ralph-lsp',
        'Ralph LSP',
        serverOptions,
        clientOptions
    );

    // Start the client.
    client.start();
}

// this method is called when your extension is deactivated
export function deactivate() {
  clearInterval(timerId)
  if (!client) {
      return undefined;
  }
  return client.stop();
}

async function init() {
  const files = await vscode.workspace.findFiles('**/*.ral', '**/{node_modules,.git}/**')
  files.forEach(async (uri) => {
    const doc = await vscode.workspace.openTextDocument(uri)
    try {
      parser(doc)
      cache.analyse()
    } catch (err) {
      console.log(`Init failed ${uri}`, err)
    }
  })
}

const timerId = setInterval(() => {
  cache.analyse()
}, 1000 * 60 * 5)

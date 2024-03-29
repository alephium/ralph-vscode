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
  hoverProvider().forEach((value) => context.subscriptions.push(vscode.languages.registerHoverProvider(selector, value)))
  context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider(selector, new FormatterProvider()))
  context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(selector, new SymbolProvider()))
  context.subscriptions.push(vscode.languages.registerWorkspaceSymbolProvider(new SymbolProvider()))
  // context.subscriptions.push(vscode.languages.registerCompletionItemProvider(selector, new GlobalProvider()))
  context.subscriptions.push(vscode.languages.registerCompletionItemProvider(selector, new ContractBuiltInProvider(), '.'))
  context.subscriptions.push(vscode.languages.registerCompletionItemProvider(selector, new BuiltInProvider()))
  context.subscriptions.push(vscode.languages.registerCompletionItemProvider(selector, new IdentifierProvider()))
  context.subscriptions.push(vscode.languages.registerCompletionItemProvider(selector, new EmitProvider(), 'emit'))
  context.subscriptions.push(vscode.languages.registerCompletionItemProvider(selector, new AnnotationProvider(), '@', '(', ')'))
  // context.subscriptions.push(vscode.languages.registerCompletionItemProvider(selector, new EnumProvider(), '.'))
  context.subscriptions.push(vscode.languages.registerCompletionItemProvider(selector, new MemberProvider(), '.'))
  context.subscriptions.push(vscode.languages.registerDefinitionProvider(selector, new DefinitionProvider()))
  context.subscriptions.push(vscode.languages.registerRenameProvider(selector, new RalphRenameProvider()))
  context.subscriptions.push(vscode.languages.registerSignatureHelpProvider(selector, new RalphSignatureHelpProvider(), '(', ')', ','))
  context.subscriptions.push(vscode.languages.registerImplementationProvider(selector, new RalphImplementationProvider()))
  context.subscriptions.push(vscode.languages.registerTypeDefinitionProvider(selector, new RalphTypeDefinitionProvider()))
  context.subscriptions.push(vscode.languages.registerReferenceProvider(selector, new RalphReferenceProvider()))
  context.subscriptions.push(vscode.languages.registerTypeHierarchyProvider(selector, new RalphTypeHierarchyProvider()))

  console.log('register push completed!')
}

// this method is called when your extension is deactivated
export function deactivate() {
  clearInterval(timerId)
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

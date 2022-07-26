// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import commands from "./commands";
import * as ident from './ident';
import * as line from './line';
import * as paragraph from './paragraph';

const FORMAT_SELECTION_COMMAND = 'editor.action.formatSelection';
const FORMAT_DOCUMENT_COMMAND = 'editor.action.formatDocument';

async function formatCode(language: string | undefined, editor: vscode.TextEditor) {
	const document = editor.document;

	await vscode.languages.setTextDocumentLanguage(document, language || document.languageId);

	if (editor.document.getText(editor.selection)) {
		vscode.commands.executeCommand(FORMAT_SELECTION_COMMAND);
	} else {
		vscode.commands.executeCommand(FORMAT_DOCUMENT_COMMAND);
	}
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "format-code" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	commands.map(command => command.command).forEach((command) => {
		let disposable = vscode.commands.registerTextEditorCommand(command, (textEditor) => {
			const language = command.split('.').pop();
			formatCode(language, textEditor);
		});
		context.subscriptions.push(disposable);
	});

    //format comment
	context.subscriptions.push(vscode.commands.registerCommand('format-comment.formatComment', formatComment));
}

// this method is called when your extension is deactivated
export function deactivate() { }


function formatComment() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const maxLen = vscode.workspace.getConfiguration().get('format-comment.settings.maxLength') as number;
    const document = editor.document;
    const idxFirstLine = editor.selection.start.line;
    const idxLastLine = editor.selection.end.line;

    const cleanLines = line.parseAndClean(document, idxFirstLine, idxLastLine);
    if (cleanLines instanceof Error) {
        vscode.window.showErrorMessage(cleanLines.message, { modal: true });
        return;
    }

    const origLines = line.parseRaw(document, idxFirstLine, idxLastLine);
    const origIdent = ident.fromLine(origLines[0]);
    const origCommPrefix = ident.getCommentPrefix(origLines[0]) as string;

    const paragraphs = paragraph.parse(cleanLines);
    const newLines = paragraph.produceFinal(paragraphs, origIdent, origCommPrefix, maxLen);

    if (!line.equals(origLines, newLines)) { // replace only if lines are different
        let targetSel = new vscode.Selection(
            new vscode.Position(idxFirstLine, 0),
            new vscode.Position(idxLastLine, document.lineAt(idxLastLine).text.length),
        );
        editor.edit(b => b.replace(targetSel,
            newLines.join(document.eol === vscode.EndOfLine.LF ? '\n' : '\r\n') ));
    }

    const newFirstIdent = ident.fromLine(newLines[0]);
    editor.selection = new vscode.Selection(
        new vscode.Position(idxFirstLine, ident.produce(newFirstIdent).length),
        new vscode.Position(idxFirstLine + newLines.length - 1,
            newLines[newLines.length - 1].length),
    );   
}

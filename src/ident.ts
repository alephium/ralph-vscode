import * as vscode from 'vscode';

export interface Ident {
	numTabs: number,
	tabWidth: number,
	useSpaces: boolean,
};

export function fromLine(line: string): Ident {
	const editorOpts = vscode.window.activeTextEditor!.options;

	let ident: Ident = {
		numTabs: 0,
		tabWidth: editorOpts.tabSize as number,
		useSpaces: editorOpts.insertSpaces as boolean,
	};

	if (ident.useSpaces) {
		let numSpaces = 0;
		let i = 0;
		while (line[i++] === ' ') ++numSpaces;
		ident.numTabs = (numSpaces - (numSpaces % ident.tabWidth)) / ident.tabWidth;

	} else {
		let i = 0;
		while (line[i++] === '\t') ++ident.numTabs;
	}

	return ident;
};

export function getCommentPrefix(line: string): string | Error {
	const trimmed = line.trimStart();

	for (const blockDelim of ['/*', '*/', '**/']) {
		if (trimmed.startsWith(blockDelim)) {
			return new Error(
				'Invalid text comment line. Do not select the top/bottom delimiter.');
		}
	}

	for (const validPrefix of ['///', '//!', '//', '#', '*']) {
		if (trimmed.startsWith(validPrefix)) {
			return validPrefix;
		}
	}

	return new Error('Invalid comment line.');
};

export function produce(ident: Ident): string {
	return (ident.useSpaces ? ' '.repeat(ident.tabWidth) : '\t')
		.repeat(ident.numTabs);
};

export function calcLength(ident: Ident): number {
	return (ident.useSpaces ? ident.tabWidth : 4) * ident.numTabs;
};

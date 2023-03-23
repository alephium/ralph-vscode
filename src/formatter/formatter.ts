/* eslint-disable prefer-regex-literals */
/* eslint-disable no-param-reassign */
import * as vscode from 'vscode'

export class FormatterProvider implements vscode.DocumentFormattingEditProvider {
  private functions: Array<string> = []

  private keywords: Array<string> = []

  private types: Array<string> = []

  private ends: Array<string> = []

  private skipString: Array<string> = []

  provideDocumentFormattingEdits(document: vscode.TextDocument) {
    if (vscode.window.visibleTextEditors.every((e) => e.document.fileName !== document.fileName)) {
      return []
    }

    const out = []
    this.functions = ['assert!', '[A-Za-z_]*(_TO_)[A-Za-z_]*']

    this.keywords = [
      'let',
      'mut',
      'const',
      'for',
      'event',
      'emit',
      'struct',
      'TxScript',
      'Contract',
      'AssetScript',
      'enum',
      'Interface',
      'fn',
      'pub',
      'extends',
      'Abstract',
      'implements',
      'import',
      'if',
      'else',
      'while',
      'for',
      'return',
      'alph',
    ]

    this.types = []

    this.ends = []

    // Do not format this strings
    this.skipString = [
      `["']{1}[^\"\'\\\\]*(?:\\\\[\\s\\S][^"'\\\\]*)*["']{1}`,
      '\\(\\*[\\s\\S]*?\\*\\)',
      '\\/\\*[\\s\\S]*?\\*\\/',
      '\\/\\/[^\\n]*\\n', // All single line comments
    ]

    let text = document.getText()
    text = this.spaces(text)

    out.push(new vscode.TextEdit(new vscode.Range(new vscode.Position(0, 0), document.lineAt(document.lineCount - 1).range.end), text))

    return out
  }

  spaces(text: string): string {
    // Delete space between func name and (
    // ABS ( to ABS(
    let regEx = new RegExp(`\\b(?:${this.functions.join('|')})\\b\\s+\\(`, 'ig')
    text = text.replace(regEx, (match) => {
      return match.replace(/\s+/, '')
    })

    // Add space after keywords
    // if( to if (
    regEx = new RegExp(`\\b(if|while)\\s*\\(`, 'ig')
    text = text.replace(regEx, (match, key) => {
      return key !== undefined ? `${key} (` : match
    })

    //  } else {
    regEx = new RegExp(`}\\s*else\\s*{`, 'ig')
    text = text.replace(regEx, (match, key) => (key !== undefined ? '} else {' : match))

    const addSpace = {
      csb: ['\\*\\)', '\\*\\/', '\\/\\/', '\\(\\*', '\\/\\*'],
      csa: ['\\(\\*', '\\/\\*', '\\/\\/'],
      ss: ['--', '\\+\\+', '&&', '\\|\\|', '==', '->', '<=', '>=', '!=', '\\*', '%', '=', '\\+', '-', '&', '>', '<', '\\|'],
    }

    regEx = new RegExp(`(?<! )(${addSpace.csb.join('|')})`, 'ig')
    text = text.replace(regEx, (match, sign) => ` ${sign}`)

    regEx = new RegExp(`(${addSpace.csb.join('|')})(?! )`, 'ig')
    text = text.replace(regEx, (match, sign) => `${sign} `)

    // operator
    regEx = new RegExp(`${addSpace.ss.map((val) => `\\s*${val}\\s*`).join('|')}`, 'ig')
    text = text.replace(regEx, (match, sign) => (sign !== undefined ? ` ${match.trim()} ` : match))

    // :
    regEx = new RegExp(`\\s*\\:\\s*`, 'ig')
    text = text.replace(regEx, ': ')

    // .
    regEx = new RegExp(`\\s*\\.\\s*`, 'ig')
    text = text.replace(regEx, '.')

    // ,
    regEx = new RegExp(`\\s*,`, 'ig')
    text = text.replace(regEx, ',')

    // )  extends
    regEx = new RegExp(`\\)\\s*extends\\s*`, 'ig')
    text = text.replace(regEx, ') extends ')

    // keyword
    regEx = new RegExp(`${this.keywords.map((val) => `${val}\\s{1,}`).join('|')}`, 'ig')
    text = text.replace(regEx, (match, sign) => (sign !== undefined ? `${match.trim()} ` : match))

    return text
  }
}

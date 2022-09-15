/* eslint-disable max-classes-per-file */
import * as vscode from 'vscode'
import * as path from 'path'
import { Downloader } from './downloader'
import * as logger from './logger'
import { Logger } from './logger'

class Option {
  ignoreUnusedConstantsWarnings = false

  ignoreUnusedVariablesWarnings = false

  ignoreUnusedFieldsWarnings = false

  ignoreReadonlyCheckWarnings = false

  ignoreUnusedPrivateFunctionsWarnings = false

  ignoreExternalCallCheckWarnings = false
}

export class Compiler {
  cmd: string | undefined

  log: logger.Logger

  option: Option | undefined

  constructor() {
    this.log = new logger.Logger('Compiler')
    this.cmd = vscode.workspace.getConfiguration().get('ralph.compiler.command')
    this.option = vscode.workspace.getConfiguration().get('ralph.compiler.option') as Option
  }

  async compiler(editor: vscode.TextEditor) {
    Logger.show()
    const fullFileName = editor.document.fileName
    if (!fullFileName.endsWith('.ral')) {
      return
    }
    if (editor.document.isDirty) {
      editor.document.save()
    }

    if (!this.cmd && vscode.workspace.rootPath) {
      const d = new Downloader()
      await d.showQuickPick()
      const jar = path.join(vscode.workspace.rootPath, d.config.target)
      const warn = this.warning()
      this.cmd = `java -jar ${jar} ${warn} -f ${fullFileName}`
    }

    this.log.info(`Compiler.cmd: ${this.cmd}`)
    const { exec } = require('child_process')

    vscode.window.setStatusBarMessage(`Execute command: ${this.cmd}`)

    exec(this.cmd, (_error: any, stdout: string, stderr: string) => {
      if (stderr) {
        this.log.info(stderr)
        vscode.window.showErrorMessage(stderr)
      } else if (stdout) {
        this.log.info(stdout)
      }
    })
  }

  warning(): string {
    let warning = ''
    if (this.option?.ignoreUnusedConstantsWarnings) {
      warning += '--ic '
    }
    if (this.option?.ignoreUnusedVariablesWarnings) {
      warning += '--iv '
    }

    if (this.option?.ignoreUnusedFieldsWarnings) {
      warning += '--if '
    }

    if (this.option?.ignoreReadonlyCheckWarnings) {
      warning += '--ir '
    }

    if (this.option?.ignoreUnusedPrivateFunctionsWarnings) {
      warning += '--ip '
    }

    if (this.option?.ignoreExternalCallCheckWarnings) {
      warning += '--ie '
    }
    return warning
  }
}
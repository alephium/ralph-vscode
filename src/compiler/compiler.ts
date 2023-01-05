import * as vscode from 'vscode'
import { existsSync } from 'fs'
import { exec } from 'child_process'
import { Downloader } from '../downloader/downloader'
import * as logger from '../logger/logger'
import { Logger } from '../logger/logger'

export class Compiler {
  cmd: string | undefined

  log: logger.Logger

  option: CompileOption | undefined

  constructor() {
    this.log = new logger.Logger('Compiler')
    this.cmd = vscode.workspace.getConfiguration().get('ralph.compile.command')
    this.option = vscode.workspace.getConfiguration().get('ralph.compile.option') as CompileOption
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
      const jar = d.jarPath()
      if (!existsSync(jar)) {
        await d.showQuickPick()
      }
      const warn = this.warning()
      let debug = ''
      if (this.option?.debug) {
        debug = '-d'
      }
      this.cmd = `java -jar ${jar} ${debug} -c ${this.option?.contracts} -a ${this.option?.artifacts} ${warn} `
    }

    this.log.info(`Compiler.cmd: ${this.cmd}`)
    vscode.window.setStatusBarMessage(`Execute command: ${this.cmd}`)
    if (this.cmd != null) {
      exec(this.cmd, (_error: any, stdout: string, stderr: string) => {
        if (stderr) {
          this.log.info(stderr)
          vscode.window.showErrorMessage(stderr)
        } else if (stdout) {
          this.log.info(stdout)
        }
      })
    }
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

    if (this.option?.ignoreUpdateFieldsCheckWarnings) {
      warning += '--ir '
    }

    if (this.option?.ignoreUnusedPrivateFunctionsWarnings) {
      warning += '--ip '
    }

    if (this.option?.ignoreExternalCallCheckWarnings) {
      warning += '--ie '
    }

    if (this.option?.warningsAsError) {
      warning += '-w '
    }
    return warning
  }
}

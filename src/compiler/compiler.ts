import * as vscode from 'vscode'
import * as path from 'path'
import * as os from 'os'
import { Downloader } from '../downloader/downloader'
import * as logger from '../logger/logger'
import { Logger } from '../logger/logger'

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
    let project = this.option?.projectDir
    if (project === undefined || project.length === 0) {
      project = path.dirname(fullFileName)
    }
    if (!this.cmd && vscode.workspace.rootPath) {
      const d = new Downloader()
      await d.showQuickPick()
      const jar = path.join(os.homedir(), '.alephium-dev', d.config.target)
      const warn = this.warning()
      this.cmd = `java -jar ${jar} --project ${project} ${warn} -f ${fullFileName}`
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

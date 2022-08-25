import * as vscode from 'vscode'
import * as path from 'path'
import { Downloader } from './downloader'
import * as logger from './logger'
import { Logger } from './logger'

export class Compiler {
  cmd: string | undefined

  log: logger.Logger

  constructor() {
    this.log = new logger.Logger('Compiler')
    this.cmd = vscode.workspace.getConfiguration().get('ralph.compiler.command')
  }

  async compiler(editor: vscode.TextEditor) {
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
      this.cmd = `java -jar ${jar} -f ${fullFileName}`
    }

    this.log.info(`Compiler.cmd: ${this.cmd}`)
    const { exec } = require('child_process')

    vscode.window.setStatusBarMessage(`Execute command: ${this.cmd}`)

    exec(this.cmd, (_error: any, stdout: string, stderr: string) => {
      if (stderr) {
        this.log.info(stderr)
        console.log(stderr)
        vscode.window.showErrorMessage(stderr)
      } else if (stdout) {
        this.log.info(stdout)
        console.log(stdout)
      }
    })
    Logger.show()
  }
}

import * as vscode from 'vscode'
import * as path from 'path'
import { existsSync } from 'fs'
import * as os from 'os'
import * as logger from '../logger/logger'
import { download } from '../util/util'

export class Downloader {
  config!: Config

  log: logger.Logger

  constructor() {
    this.log = new logger.Logger('Downloader')
    this.loadConfig()
  }

  private loadConfig() {
    this.config = vscode.workspace.getConfiguration().get('ralph.download.config') as Config
  }

  async showQuickPick() {
    logger.Logger.show()
    this.loadConfig()
    await this.download()
  }

  async download() {
    const dir = path.join(os.homedir(), '.alephium-dev')
    if (dir) {
      const targetPath = path.join(dir, this.config.target)
      if (!existsSync(targetPath)) {
        this.log.info(`begin download : ${this.config.url}`)
        await download(this.config.url, targetPath, (state) => {
          this.log.info(
            `downloading ${this.config.target}, total: ${Number(state.size.total / 1024).toFixed(2)} KB, speed: ${Number(
              state.speed / 1024
            ).toFixed(2)} KB/sec, ${Number(state.percent * 100).toFixed(2)}/%, ${this.config.url}`
          )
        })
          .then(() => {
            const msg = `download complete: ${this.config.url}`
            this.log.info(msg)
            vscode.window.showInformationMessage(msg)
          })
          .catch((err) => {
            this.log.info(err.message)
            vscode.window.showErrorMessage(err.message)
          })
      } else {
        this.log.info(targetPath)
      }
    }
  }
}

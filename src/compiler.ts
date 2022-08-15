'use strict';
import * as vscode from 'vscode';
import { Downloader } from './downloader';
import * as logger from './logger';
import * as path from 'path';

export class Complier {
  cmd: string | undefined;
  log: logger.Logger;
  constructor() {
    this.log = new logger.Logger('Complier');
    this.cmd = vscode.workspace
      .getConfiguration()
      .get('ralph.compiler.command');
  }

  complier(editor: vscode.TextEditor) {
    let fullFileName = editor.document.fileName;
    if (!fullFileName.endsWith('.ral')) {
      return;
    }
    if (editor.document.isDirty) {
      editor.document.save();
    }

    if (!this.cmd && vscode.workspace.rootPath) {
      const d = new Downloader();
      d.showQuickPick();
      const jar = path.join(vscode.workspace.rootPath, d.config.target);
      this.cmd = `java -jar ${jar} -f ${fullFileName}`;
    }

    this.log.info(`Complier.cmd: ${this.cmd}`);
    let exec = require('child_process').exec;

    vscode.window.setStatusBarMessage(`Execute command: ${this.cmd}`);

    exec(this.cmd, (_error: any, stdout: string, stderr: string) => {
      if (stderr) {
        this.log.info(stderr);
        console.log(stderr);
      } else if (stdout) {
        this.log.info(stdout);
        console.log(stderr);
      }
    });
  }
}

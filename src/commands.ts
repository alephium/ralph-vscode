'use strict';

import { Downloader } from './downloader';
import { Compiler } from './compiler';
import * as vscode from 'vscode';

interface Command {
  command: string;
  title: string;
  callback: (...args: any[]) => any;
}

const commands: Command[] = [
  {
    command: 'ralph.downloader',
    title: 'ralph downloader',
    callback: () => {
      const download = new Downloader();
      download.showQuickPick();
    }
  },
  {
    command: 'ralph.downloader',
    title: 'ralph downloader',
    callback: () => {
      vscode.window.activeTextEditor &&
        new Compiler().compiler(vscode.window.activeTextEditor);
    }
  }
];

export default commands;

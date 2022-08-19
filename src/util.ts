import * as fs from 'fs';
import * as vscode from 'vscode';
import * as request from 'request';
const requestProgress = require('request-progress');

export function download(
  srcUrl: string,
  destPath: fs.PathLike,
  progress: (state: any) => void
): Promise<void> {
  return new Promise((resolve, reject) => {
    requestProgress(request.get(srcUrl))
      .on(
        'progress',
        (state: {
          percent: number;
          speed: number;
          size: { total: number; transferred: number };
          time: { elapsed: number; remaining: number };
        }) => progress(state)
      )
      .on('complete', () => resolve())
      .on('error', (err: any) => reject(err))
      .pipe(fs.createWriteStream(destPath));
  });
}

export async function fsExists(path: fs.PathLike): Promise<boolean> {
  try {
    await fs.promises.access(path);
    return true;
  } catch {
    return false;
  }
}

export function isOSWindows(): boolean {
  return process.platform === 'win32';
}

export function isOSUnixoid(): boolean {
  let platform = process.platform;
  return (
    platform === 'linux' ||
    platform === 'darwin' ||
    platform === 'freebsd' ||
    platform === 'openbsd'
  );
}

export function correctBinname(binname: string): string {
  return binname + (process.platform === 'win32' ? '.exe' : '');
}

export function correctScriptName(binname: string): string {
  return binname + (process.platform === 'win32' ? '.bat' : '');
}

export interface Status {
  //Updates the message.
  update(msg: string): void;

  dispose(): void;
}

// Encapsulates a status bar item.
export class StatusBarEntry implements Status {
  private barItem: vscode.StatusBarItem;
  private prefix?: string;
  private disposed: boolean = false;

  constructor(context: vscode.ExtensionContext, prefix?: string) {
    this.prefix = prefix;
    this.barItem = vscode.window.createStatusBarItem(
      vscode.StatusBarAlignment.Left
    );
    context.subscriptions.push(this.barItem);
  }

  show(): void {
    this.barItem.show();
  }

  update(msg: string): void {
    this.barItem.text = `${this.prefix} ${msg}`;
  }

  dispose(): void {
    if (!this.disposed) {
      this.disposed = true;
      this.barItem.dispose();
    }
  }
}

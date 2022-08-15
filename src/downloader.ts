"use strict";

import * as vscode from 'vscode';
import * as path from 'path';
import {createWriteStream} from 'node:fs';
import fetch from 'node-fetch';
import * as logger from './logger';
import { existsSync } from 'fs';


type Config = {
  name: string;
  url: string;
  target: string;
};

export class Downloader {
  config!: Config;
  log: logger.Logger;
  constructor() {
    this.log = new logger.Logger('Downloader');
    this.loadConfig();
  }

  private loadConfig() {
    const config = vscode.workspace
      .getConfiguration().get('ralph.downloader.config') as Config;
    this.config = config;
  }

  async showQuickPick() {
    this.loadConfig();
    this.download();
  }

  async download() {
    const dir = vscode.workspace.rootPath;
    if (dir) {
      const targetPath = path.join(dir, this.config.target);        
      if (!existsSync(targetPath) ){
        this.log.info("download :" + this.config.url)
        const targetStream = createWriteStream(targetPath);
        const response = await fetch(this.config.url);
        response.body?.pipe(targetStream)
      }
    }
  }
}

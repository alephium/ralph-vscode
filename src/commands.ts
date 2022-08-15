'use strict';

import { CommonOptions } from 'child_process';

interface Command {
  command: string;
  title: string;
}

const commands: Command[] = [
  {
    command: 'format-code.format.ralph',
    title: 'Format Ralph'
  }
];

export default commands;

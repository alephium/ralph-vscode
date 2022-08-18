'use strict';

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

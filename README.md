# Ralph Language for VS Code

## Overview

Ralph is the language used in alephium to create smart contracts, ralph-vscode is vscode extension.

## Features

- Set theme appear more friendly ✅
- Highlighting ✅
- Snippet ✅
- Formatting ✅（simple format）
- Complie ✅ ( ctl[cmd] + shift + p => ralph: compile )
- Deploy ⏳
- IntelliSense ⏳
  - Provide a hover for builtIn function and primitive type. ✅
  - Provide a hover for the given code position. ✅
  - Document symbol provider. ✅
  - Jump to definition. ✅
  - Rename Variable. ✅
- Linting ✅
- Debugging ⏳

## Extension Settings

- seting themes

## Guide

### compile

![avatar](./img/img1.jpg)

### Command compile

```shell
java -jar /Users/${home}/.alephium-dev/ralphc.jar --project ./tests/contracts/
```

### More command compile
https://github.com/suyanlong/ralphc

## FAQ

<https://github.com/suyanlong/ralph-vscode/issues>

## Contribution

See [CONTRIBUTING.md](https://github.com/suyanlong/ralph-vscode/blob/main/CONTRIBUTING.md)

## License

[GNU3](<[LICENSE](https://github.com/suyanlong/ralph-vscode/blob/main/LICENSE)>)

## References

<https://github.com/alephium>

# Ralph Language for VS Code

## Overview

Ralph is the language used in alephium to create smart contracts, ralph-vscode is vscode extension.

## Features

- Set theme appear more friendly ✅
- Highlighting ✅
- Snippet ✅
- Formatting ✅（simple format）
- Complie ✅ ( ctl[cmd] + shift + p => Ralph: compile )
- IntelliSense ✅
  - Provide a hover for the given code position. ✅
  - Document symbol provider. ✅
  - Rename Symbol. ✅
  - Symbol completion. ✅
  - Find All symbol. ✅
  - Go to symbol. ✅
  - Peek symbol. ✅
  - ...
- Linting. ✅

## Extension Settings

### Theme

![img.png](./img/setTheme.png)

### Configuration

![img.png](img/userSet.png)

## Guide

### Compile

![img.png](./img/compile.png)

### Hover

![avatar](./img/builtInHover.png)

### Outline

![img.png](./img/outLine.png)

### Completion

![img.png](./img/completion.png)

### Log output

![img.png](./img/logOut.png)

### Command compile

```shell
cd tests && java -jar ${home}/.alephium-dev/alephium-ralphc-*.jar -c ./contracts -a ./artifacts
```

#### More command compile

https://github.com/alephium/alephium

## FAQ

<https://github.com/alephium/ralph-vscode/issues>

## References

<https://github.com/alephium>

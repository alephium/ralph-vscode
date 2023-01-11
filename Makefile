compile:
	pnpm run compile

build: dep compile package

package: compile
	pnpm vsce package --no-dependencies

dep:
	pnpm install

publish:
	./node_modules/vsce/vsce publish

clean:
	rm -rf ./ralph-vscode-*.vsix
	rm -rf ./dist
	rm -rf node_modules


fmt:
	pnpm run fmt

lint:
	pnpm run lint

antlr4ts:
	pnpm run antlr4ts


test:
	pnpm run test

downLoadBuildIn:
	wget https://raw.githubusercontent.com/alephium/alephium/master/protocol/src/main/resources/ralph-built-in-functions.json -O ./src/provider/builtIn/ralph-built-in-functions.json

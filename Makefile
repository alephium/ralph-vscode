compile:
	npm run compile

build: dep compile package

package: compile
	./node_modules/.bin/vsce package --no-dependencies

dep:
	npm install

publish:
	./node_modules/.bin/vsce publish

clean:
	rm -rf ./ralph-vscode-*.vsix
	rm -rf ./dist
	rm -rf node_modules

fmt:
	npm run fmt

lint:
	npm run lint

antlr4ts:
	npm run antlr4ts


test:
	npm run test

downLoadBuildIn:
	wget https://raw.githubusercontent.com/alephium/alephium/master/protocol/src/main/resources/ralph-built-in-functions.json -O ./src/provider/builtIn/ralph-built-in-functions.json

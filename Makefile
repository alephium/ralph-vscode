

build: dep
	yarn run compile
	yarn vsce package

compile:
	yarn run compile

dep:
	yarn install

publish:
	./node_modules/vsce/vsce publish

clean:
	rm -rf ./ralph-vscode-*.vsix
	rm -rf ./dist


fmt:
	yarn run fmt

lint:
	yarn run lint
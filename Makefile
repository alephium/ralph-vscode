

build: dep
	yarn run compile
	./node_modules/vsce/vsce package

compile:
	yarn run compile

dep:
	yarn install

publish:
	./node_modules/vsce/vsce publish

clean:
	rm -rf ./ralph-vscode-*.vsix


fmt:
	yarn run fmt
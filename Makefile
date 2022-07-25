

build:
	yarn install
	./node_modules/vsce/vsce package

publish:
	./node_modules/vsce/vsce publish
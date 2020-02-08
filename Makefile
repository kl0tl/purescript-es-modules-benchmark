PATH := $(shell npm bin):$(PATH)
.DEFAULT_GOAL := bundles

.PHONY: node_modules
node_modules:
	npm install

.PHONY: stack-local-bins
stack-local-bins:
	stack build

.PHONY: install
install: node_modules stack-local-bins

.PHONY: output
output: node_modules
	psc-package build -- --codegen js,corefn

.PHONY: dce-output
dce-output: stack-local-bins output
	stack exec zephyr -- Main --dce-foreign

.PHONY: esm-output
esm-output: stack-local-bins
	stack exec purs -- compile --output esm-output \
		$(shell psc-package sources | sed "s/^/'/;s/$$/'/" | xargs -d '\n') \
		'src/**/*.purs'

.PHONY: purs-bundles
purs-bundles: output
	mkdir -p dist && purs bundle output/*/{foreign,index}.js --module Main | \
		tee dist/purs-bundle.js | terser > dist/purs-bundle.min.js

.PHONY: webpack4-bundles
webpack4-bundles: dce-output esm-output
	cd webpack-4 && WEBPACK_VERSION=4 npx webpack --config ../webpack.config.js

.PHONY: webpack5-bundles
webpack5-bundles: dce-output esm-output
	cd webpack-5 && WEBPACK_VERSION=5 npx webpack --config ../webpack.config.js

.PHONY: webpack-bundles
webpack-bundles: webpack4-bundles webpack5-bundles

.PHONY: rollup-bundles
rollup-bundles: dce-output esm-output
	rollup --config

.PHONY: parcel-bundles
parcel-bundles: dce-output esm-output
	parcel build output/Main/index.js --out-file parcel-bundle.js \
		--no-source-maps --experimental-scope-hoisting --no-minify
	parcel build output/Main/index.js --out-file parcel-bundle.min.js \
		--no-source-maps --experimental-scope-hoisting

	parcel build dce-output/Main/index.js --out-file parcel-dce-bundle.js \
		--no-source-maps --experimental-scope-hoisting --no-minify
	parcel build dce-output/Main/index.js --out-file parcel-dce-bundle.min.js \
		--no-source-maps --experimental-scope-hoisting

	parcel build esm-output/Main/index.js --out-file parcel-esm-bundle.js \
		--no-source-maps --experimental-scope-hoisting --no-minify
	parcel build esm-output/Main/index.js --out-file parcel-esm-bundle.min.js \
		--no-source-maps --experimental-scope-hoisting

.PHONY: clean
clean:
	rm -rf dist output dce-output esm-output

.PHONY: bundles
bundles: clean purs-bundles webpack4-bundles webpack5-bundles rollup-bundles parcel-bundles
	ls -lS dist

install: 
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
lintFix: 
	npx eslint --fix .
brain-even:
	node bin/brain-even.js
pretti:
	npx prettier . --write

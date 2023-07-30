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
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
brain-progression:
	brain-progression.js
brain-prime:
	brain-prime.js	
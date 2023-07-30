install: 
	npm ci
brain-games:
	node bin/games/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
lintFix: 
	npx eslint --fix .
brain-even:
	node bin/games/brain-even.js
pretti:
	npx prettier . --write
brain-calc:
	node bin/games/brain-calc.js
brain-gcd:
	node bin/games/brain-gcd.js
brain-progression:
	node bin/games/brain-progression.js
brain-prime:
	node bin/games/brain-prime.js	
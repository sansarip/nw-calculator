build:
	lein clean
	lein fig:prod

# Requires Babashka
get-version:
	./scripts/get_version.clj

bump-version:
	lein bump-version

template:
	lein template

release:
	echo "Building app"
	make build
	echo "Bumping version"
	make bump-version
	echo "Apply templates"
	make template
	echo "Copying to docs/"
	mkdir docs/ || true
	cp -rf resources/public/* docs/
	echo "Committing changes and tagging release"
	./scripts/commit_version.clj
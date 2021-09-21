build:
	lein clean
	lein fig:prod

# Requires Babashka
get-version:
	./scripts/get_version.clj

bump-version:
	lein bump-version "$(cat CHANGELOG.md | vipe | cat)" CHANGELOG.md

template:
	lein template

release:
	echo "Building app"
	make build
	echo "Edit changelog and bumping version"
	make bump-version
	echo "Apply templates"
	make template
	echo "Copying to build/"
	mkdir build/ || true
	cp -rf resources/public/* build/ && rm build/devcards.html
	echo "Committing changes and tagging release"
	./scripts/commit_version.clj
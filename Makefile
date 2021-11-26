SNAPSHOT:=false
build-prod:
	echo "Building app"
	lein clean
	lein fig:prod

scrape-data:
	lein scrape --download-item-data=true --download-item-images=false

scrape-images:
	lein scrape --download-item-data=false --download-item-images=true

scrape: scrape-data scrape-images

# Requires Babashka
patch-data:
	./scripts/patch_items.clj

get-version:
	./scripts/get_version.clj

bump-version:
	echo "Editing changelog and bumping version, SNAPSHOT=${SNAPSHOT}"
	lein bump-version "$$(cat CHANGELOG.md | vipe | cat)" CHANGELOG.md ${SNAPSHOT}

bump-snapshot-version:
	make bump-version SNAPSHOT=true

template:
	echo "Applying templates"
	lein template

copy-to-build:
	echo "Copying to build/"
	mkdir build/ || true
	cp -rf resources/public/* build/ && rm build/devcards.html

commit-version:
	echo "Committing changes and tagging release"
	./scripts/commit_version.clj

release-snapshot: build-prod bump-snapshot-version template patch-data copy-to-build commit-version

release: build-prod bump-version template patch-data copy-to-build commit-version

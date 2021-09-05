build:
	lein clean
	lein fig:prod
	mkdir docs/ || true
	cp -rf resources/public/* app/
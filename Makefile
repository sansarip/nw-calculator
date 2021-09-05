build:
	lein clean
	lein fig:prod
	mkdir app/ || true
	cp -rf resources/public/* app/
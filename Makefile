build:
	lein clean
	lein fig:prod
	cp -rf resources/public/* app/
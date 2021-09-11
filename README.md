# New World Crafting Calculator (👷 WIP)

Web app for calculating item crafting ingredients in [New World](https://www.newworld.com/en-us/). 

View it at [newworldcraft.io](https://newworldcraft.io).

PRs are welcome! You can find me for collaboration [here on Discord](https://discord.gg/FCqzwycR23).

## Current State of the App

For simplicity's sake, all item data is in the [items.json file](https://github.com/sansarip/nw-calculator/blob/main/resources/public/data/items.json). 
If you notice an issue, you can make a PR to add/edit the data in the aformentioned JSON file. 
If your changes include adding/editing an image url of an item, then you must also put a corresponding 50x25 image in the [images directory](https://github.com/sansarip/nw-calculator/tree/main/resources/public/images).

## Future Goals

* Right now, builds and releases involve manually running `make release`. I'd like to implement CI/CD pipeline to build and auto-update the site on push/merge to main.
* Until Amazon provides a public API for the New World game, item data management will have to be a community-driven effort. Updating the [items.json file](https://github.com/sansarip/nw-calculator/blob/main/resources/public/data/items.json) is not a particularily community friendly way of handling things. I'd like to leverage the community efforts involved with the [Tradesman's Bible](https://docs.google.com/spreadsheets/d/1l_S7Ykl6QDmv-a7ntqZn8LUXq2Uo0mkLXb_ymAkxBi0/edit#gid=431530116) spreadsheet and point the site to use the data available in that spreadsheet.

## Dev

### Prerequisites <a name="prereqs"></a>

* [Clojure](https://clojure.org/guides/getting_started)
* [Leiningen](https://leiningen.org/)

### Web App

Run the web application (figwheel-main) server with the following command:

`lein fig:dev`

After some time, you should be able to browse to http://localhost:9500 to 
view the main app and http://localhost:9500/devcards.html to view the devcards.

### Scraper

The scraper may not work as expected anymore as it was based on an older version of https://newworldfans.com/.

`lein scrape`

## Prod

If you wish to create a release, you'll need the same [prerequites as Dev](#prereqs) installed. You'll want to also make sure you have the following tools installed:

* [Babashka](https://github.com/babashka/babashka)
* [Make](https://www.gnu.org/software/make/)

To compile the Prod JS, run `lein fig:prod`.

Or, you can just run `make release` which will compile Prod JS, 
overwrite `docs/` (this is where the site is served from), 
bump the version, and commit the release.


## License

Copyright © 2021 sansarip

This program and the accompanying materials are made available under the
terms of the Eclipse Public License 2.0 which is available at
http://www.eclipse.org/legal/epl-2.0.

This Source Code may also be made available under the following Secondary
Licenses when the conditions for such availability set forth in the Eclipse
Public License, v. 2.0 are satisfied: GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or (at your
option) any later version, with the GNU Classpath Exception which is available
at https://www.gnu.org/software/classpath/license.html.

# New World Crafting Calculator (👷 WIP)

Web app for calculating item crafting ingredients in [New World](https://www.newworld.com/en-us/). 

View it at [newworldcraft.io](https://newworldcraft.io).

Data scraped from [nwdb.info](nwdb.info) 🙇

PRs are welcome! You can find me for collaboration [here on Discord](https://discord.gg/FCqzwycR23).

## Current State of the App

For simplicity's sake, all item data is in the [items.json file](https://github.com/sansarip/nw-calculator/blob/main/resources/public/data/items.json). 
If you notice an issue, you can make a PR to add/edit the data in the aforementioned JSON file. 
If your changes include adding/editing an image url of an item, then you must also put a corresponding 50x25 image in the [images directory](https://github.com/sansarip/nw-calculator/tree/main/resources/public/images).

## Future Goals

* Right now, builds and releases involve manually running `make release`. I'd like to implement CI/CD pipeline to build and auto-update the site on push/merge to main.

## Local Dev

### Prerequisites

* [Clojure](https://clojure.org/guides/getting_started)
* [Leiningen](https://leiningen.org/)

### Web App

Run the web application (figwheel-main) server with the following command:

`lein fig:dev`

After some time, you should be able to browse to http://localhost:9500 to 
view the main app and http://localhost:9500/devcards.html to view the devcards.

### Scraper

The scraper graciously pulls data from [nwdb.info](nwdb.info) in a single-threaded, throttled fashion.

`lein scrape`

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

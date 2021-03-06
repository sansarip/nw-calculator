# New World Crafting Calculator

Web app for calculating item crafting ingredients in [New World](https://www.newworld.com/en-us/). 

View it at [newworldcraft.io](https://newworldcraft.io).

Data scraped from [nwdb.info](nwdb.info) 🙇

PRs are welcome! You can find me for collaboration [here on Discord](https://discord.gg/FCqzwycR23).

## Current State of the App

For simplicity's sake, all item data is in the [items.json file](https://github.com/sansarip/nw-calculator/blob/main/resources/public/data/items.json). 
If you notice an issue, then you should drop a `<date>-<description>.patch.json` file in the the `resources/data` dir 
containing your desired changes. If your changes include adding/editing an image url of an item, 
then you must also put a corresponding 128x128 image in the [images directory](https://github.com/sansarip/nw-calculator/tree/main/resources/public/images). 
Once your patch file is ready, then you can run `make patch-data` in order to patch the `items.json` file with your changes. 
You'll need [Babashka](https://github.com/babashka/babashka) installed before running the aforementioned Make command.

## Dev

Get a no-strings-attached dev environment with [Gitpod](https://gitpod.io/#https://github.com/sansarip/nw-calculator) 💥 (it may take a while to build initially) _or_ read the info below to set up your dev environment locally.

### Prerequisites <a name="prereqs"></a>

* [Clojure](https://clojure.org/guides/getting_started)
* [Leiningen](https://leiningen.org/)

### Web App

Run the web application (figwheel-main) server with the following command:

`lein fig:dev`

After some time, you should be able to browse to http://localhost:9500 to 
view the main app and http://localhost:9500/devcards.html to view the devcards.

### Scraper

The scraper graciously pulls data from [nwdb.info](nwdb.info) in a single-threaded, throttled fashion. 
The following command will download item data _and_ item images.

`lein scrape` _or_ `make scrape`

If you only want item data then run `make scrape-data`, 
and if you only want item images then run `make scrape-images`.

Afterwards, you can patch _known_ data discrepancies with `make patch-data` which will output the 
finalized `resources/public/data/items.json` file. 
`make patch` will look at the patch files in `resources/data/` in order to know what to patch.

## Prod

If you wish to create a release, you'll need the same [prerequites as Dev](#prereqs) installed. You'll want to also make sure you have the following tools installed:

* [Babashka](https://github.com/babashka/babashka)
* [Make](https://www.gnu.org/software/make/)

To compile the Prod JS, run `lein fig:prod`.

Or, you can just run `make release` which will compile Prod JS, 
overwrite `build/` (this is where the site's content is built from), 
bump the version, prompt for a CHANGELOG update, and commit the release.


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

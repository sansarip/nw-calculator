# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Calendar Versioning](https://calver.org/).

## [2022.01.26.1]
### Added
- Add ability to factor in additional-item-chance
- Add new UI that allows users to enter their additional-item trade-skill bonuses; these values are persisted to local-storage

### Fixed
- Fix missing silkweave png
- Fix missing trade-skills from certain patched items

### Changed
- Download smaller pngs
- Update item data

## [2022.01.06.1]
### Fixed
- Fix items like `Infused Silk` not showing up due to the search being run on unsorted items

## [2022.01.04.1]
### Fixed
- Fix items like satchels not showing up in search by increasing the fuzzy search threshold

## [2021.12.26.1]
### Fixed
- Fix incorrect Lodestone data due to duplicate Lodestone IDs

## [2021.12.17.4]
### Added
- Add missing items from latest version

## [2021.11.26.3]
### Added
- Add missing items from patch 1.1+

## [2021.11.15.2]
### Fixed
- Fix missing starmetal gathering and skinning starmetal tools

### Added
- Add data patching mechanism that relies on patch files located in `resources/data` 

## [2021.10.29.2]
### Fixed
- Fix coarse leather recipe

### Removed
- Remove references to rawhide scraps

## [2021.09.27.2]
### Added
- Implement ability to copy shareable link as a button

## [2021.09.26.3]
### Fixed
- Fix missing category options e.g. Sand Flux

## [2021.09.26.1]
### Changed
- Change how category options are defaulte, hopefully an improvement

### Added
- Implement URL-based routing, copy and paste away!

###

## [2021.09.24.2]
### Changed
- Cards are now free to grow as wide as they please
- Dropdowns are no longer cut off by invisible forces

## [2021.09.24.1]
### Added
- Add Gitpod support

### Fixed
-  Fix incorrect sums in summary

## [2021.09.23.1]
### Fixed
- Fix dropdown-option clicks propagating down to underlying elements
- Fix long dropdowns being partially obstructed by following items
- Fix links being clickable beyong their text
- Fix unmounted-component-update React console error

## [2021.09.22.4]
### Added
- Google Analytics

### Fixed
- Fixed loading text so that it doesn't shift when the loading SVG is displayed

## [2021.09.22.1]
### Added
- Add ingredients-summary card

### Changed
- Align quantity text to the left
- Sort category options by XP instead of tier

### Fixed
- Fix issues with searching
- Fix dropdown not closing on mobile when selecting an option

## [2021.09.21.6]
### Added
- Add support for multiplying items that output a stack of more than one item e.g. `Iron Arrows`
- Add support for selecting from item categories e.g. `Tier 3 Metals`
- Add button to remove all items
- Add clarifying icons to buttons
- Inline background color into index.html so that it loads more quickly
- Add vercel configuration

### Changed
- Scrape data from [nwdb.info](nwdb.info) instead of [newworldfans.com](newworldfans.com)

### Removed
- Remove dead code around theming and local-storage
- Remove dead webworker JS
- Remove unused images in build
- Remove unused CSS and item data
# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Calendar Versioning](https://calver.org/).

## [{{version]
### Added

### Changed
- Replace accidentally deployed dev build with prod build

### Removed
- Remove dead webworker JS

## [2021.09.21.1]
### Added
- Inline background color into index.html so that it loads more quickly
- Add support for multiplying items that output a stack of more than one item e.g. `Iron Arrows`
- Add support for selecting from item categories e.g. `Tier 3 Metals`
- Add button to remove all items
- Add clarifying icons to buttons

### Changed
- Scrape data from [nwdb.info](nwdb.info) instead of [newworldfans.com](newworldfans.com)

### Removed
- Remove dead code around theming and local-storage
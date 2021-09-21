# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Calendar Versioning](https://calver.org/).

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

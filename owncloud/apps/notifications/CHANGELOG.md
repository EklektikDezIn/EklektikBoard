# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/).

## [0.5.0]

### Added

- Added bell icon in black - [#185](https://github.com/owncloud/notifications/pull/185)

### Changed

- Drop php 5.6 - [#267](https://github.com/owncloud/notifications/issues/267)

### Fixes

- Only set icon in case an icon is available - [#275](https://github.com/owncloud/notifications/issues/275)

## [0.4.1]

### Added

- Notifications can now have an icon - [#104](https://github.com/owncloud/notifications/issues/104)
- Added occ command to send notification to a user or a group - [#104](https://github.com/owncloud/notifications/issues/104)

### Fixed

- Make sure buttons stays in place even with long messages - [#114](https://github.com/owncloud/notifications/issues/114)
- Don't escape link text title - [#111](https://github.com/owncloud/notifications/issues/111)
- Fix actions and escaping - [#109](https://github.com/owncloud/notifications/issues/109)
- Move OCS calls to app framework - consumes less resources - [#98](https://github.com/owncloud/notifications/pull/98)
- Don't use escaped message for browser notification - [#100](https://github.com/owncloud/notifications/pull/100)

[0.5.0]: https://github.com/owncloud/core/compare/v10.1.1...v0.5.0
[0.4.1]: https://github.com/owncloud/core/compare/v10.0.2...v10.1.1


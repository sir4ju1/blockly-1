*Note: blockly is a component of [the learn.code.org curriculum](https://github.com/code-dot-org/cdo-curriculum). See the [root umbrella repository](https://github.com/code-dot-org/cdo-curriculum) which includes instructions for setting up a full learn.code.org build which includes this blockly curriculum and the Rails teacher dashboard.*

# Blockly 20 Hour Curriculum

Blockly is a web-based, graphical programming editor. Users can drag blocks
together to build an application. No typing required. Credit goes to these
awesome [developers](https://code.google.com/p/blockly/wiki/Credits#Engineers)
and a small army of
[translators](https://code.google.com/p/blockly/wiki/Credits#Translators).

This repository contains the source code for the
[Blockly](https://code.google.com/p/blockly/) based 20 hour curriculum and Hour
of Code. Information about Blockly can be found in the
[wiki](https://code.google.com/p/blockly/w/list).

- [Quick Start](#quick-start)
- [Project Specification](#project-specification)
- [Contribute to Blockly](#to-contribute)


## Quick Start

```
# Get the code
git clone https://github.com/code-dot-org/blockly.git mooc
cd mooc

# Machine setup (OSX with Homebrew)
brew install node
npm install -g grunt-cli

# Build
npm install
grunt

# Run with live-reload server
grunt dev
open http://localhost:8000

# Run tests (after a build, or while dev is running)
grunt test
```

One of the node modules, node-canvas, depends on Cairo being installed.
Instructions for installing Cairo can be found at https://github.com/LearnBoost/node-canvas/wiki.
Instructions for MacOSX:
```
export PKG_CONFIG_PATH="$PKG_CONFIG_PATH:/opt/X11/lib/pkgconfig"
brew update
brew install cairo
```

## Project Specification

Both of these tutorials are found on code.org/learn or csedweek.org/learn. At
the end of 1-hour, you’re sent to a Drupal thank you page that leads you back
to code.org/learn


### 1 hour tutorial

- 18 Maze puzzles + 6 videos, with celeb videos and licensed skins
- No auth/identity/login, no state
- Works on touch-screens, cross-browser (IE9+ required. IE8 highly desired)
- Looks good on smartphones / small screens
- Translated into at least spanish, and other non-bidi languages


### 20-hour curriculum

- X stages, Y puzzles, Z videos
- HAS student auth, teacher auth.
- Student can see a map of where they are. Earn “trophies”
- Teacher can see dashboard of student progress
- Both students and teachers earn real-world rewards upon completion.
- Works on touch-screens, cross-browser (IE9+ required. IE8 highly desired)
- NOT optimized for smartphones / small screens. NOT translated


## Contributing

### Style Guide

- In general follow google's javascript style [guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml).
- 80 character line length.
- 2 space indent.
- 4 space indent on long line breaks.
- `grunt jshint` should report 0 warnings or errors.

### Localization

Since localizing in to many languages dramatically slows down the build, the
default target locales are `en_us` and `en_ploc` (pseudolocalized). To build
all available locales, specify `MOOC_LOCALIZE=1` in your environment:

```bash
MOOC_LOCALIZE=1 grunt rebuild
```

See [cdo-i18n](https://github.com/code-dot-org/cdo-i18n) for more information
about the localization of Code.org projects.


## Releases

Compiled distrubutions are published as tarballs to Amazon S3.  You'll need
the [AWS CLI tool][1] and access to the [Code.org secrets][2].  Run
`path/to/secrets/cdo-env ./script/release` to produce a fullly-localized build
in `./build/package`, which will be tared up into `./dist`, stampped with a
git tag, pushed to GitHub, and published on S3.


[1]: http://aws.amazon.com/cli/
[2]: https://github.com/code-dot-org/cdo-secrets

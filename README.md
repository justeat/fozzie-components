# Fozzie Components Documentation


## Installation

This is a _mono-repo_.  It contains several packages, all controlled from a top level `packages.json`.

Each project has its own `package.json` file containing package specific configuration, **however** don't run `yarn install` from a package project; instead run it from the top level.

If you run `yarn install` from a package then you may well get an unhelpful error like this:

```none
Error: ENOENT: no such file or directory, symlink '…\fozzie-components\packages\…' -> '…\fozzie-components\node_modules\@justeat\…'
```

If this happens, delete all the `node_modules` folders throughout and then run `yarn install` from the root directory again.


## Running Storybook

To run storybook first you must run the following at the the top level

`yarn build` to build the require packages for storybook to run.

Then run `yarn test` in order to get the required test files outputted for storybook’s unit test add-on to work.

Then run `yarn storybook:serve` to start storybook, which will open on `localhost:6006`.


## Publishing Components/

See [Fozzie](/https://fozzie.just-eat.com/documentation/open-source/) docs for further information on publishing and releasing (`Mono-repo Overview` and `Module maintenance`):

### [Just Eat Storybook production](https://justeat.github.io/fozzie-components/@justeat/storybook/index.html)

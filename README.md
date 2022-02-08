# promise-props-recursive

[![npm version](http://img.shields.io/npm/v/promise-props-recursive.svg?style=flat-square)](http://browsenpm.org/package/promise-props-recursive)

Resolve a (potentially) deep structure of promises

## Installation

```bash
$ npm install --save promise-props-recursive
```

## Usage

```js
var promisePropsRecursive = require('promise-props-recursive')

console.log(
  promisePropsRecursive({
    cats: Promise.resolve(['bamse', 'beans']),
    dogs: {
      schnauzers: Promise.resolve({
        kokos: {
          isSchnauzer: true,
          isCute: Promite.resolve(true),
        },
      }),
      mixed: Promise.resolve('katla'),
    },
  })
)
```

## License

MIT-licensed. See LICENSE.

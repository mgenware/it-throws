# it-throws

[![Build Status](https://img.shields.io/travis/mgenware/it-throws.svg?style=flat-square&label=Build+Status)](https://travis-ci.org/mgenware/it-throws)
[![npm version](https://img.shields.io/npm/v/it-throws.svg?style=flat-square)](https://npmjs.com/package/it-throws)
[![Node.js Version](http://img.shields.io/node/v/it-throws.svg?style=flat-square)](https://nodejs.org/en/)

Wrapper on Node.js `assert.throws`.

## Installation

```sh
yarn add it-throws
```

## Usage

```js
import itThrows from 'it-throws';

it('Throws', () => {
  itThrows(() => {
    throw new Error('foo');
  }, 'foo');
});
```

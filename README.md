# it-throws

[![Build Status](https://img.shields.io/travis/mgenware/it-throws.svg?style=flat-square&label=Build+Status)](https://travis-ci.org/mgenware/it-throws)
[![npm version](https://img.shields.io/npm/v/it-throws.svg?style=flat-square)](https://npmjs.com/package/it-throws)
[![Node.js Version](http://img.shields.io/node/v/it-throws.svg?style=flat-square)](https://nodejs.org/en/)

A wrapper around Node.js `assert.rejects`.

### Installation

```sh
yarn add it-throws -D
```

### Usage

```js
import itThrows from 'it-throws';

it('Sync error', () => {
  itThrows(() => {
    throw new Error('foo');
  }, 'foo');
});

it('Async error', () => {
  itThrows(async () => {
    throw new Error('foo');
  }, 'foo');
});
```

Is equivalent to:

```js
import * as assert from 'assert';

it('Sync error', () => {
  assert.rejects(
    () => {
      throw new Error('foo');
    },
    {
      message: 'foo',
    },
  );
});

it('Async error', () => {
  assert.rejects(
    async () => {
      throw new Error('foo');
    },
    {
      message: 'foo',
    },
  );
});
```

# it-throws

[![Build Status](https://img.shields.io/travis/mgenware/it-throws.svg?style=flat-square&label=Build+Status)](https://travis-ci.org/mgenware/it-throws)
[![npm version](https://img.shields.io/npm/v/it-throws.svg?style=flat-square)](https://npmjs.com/package/it-throws)
[![Node.js Version](http://img.shields.io/node/v/it-throws.svg?style=flat-square)](https://nodejs.org/en/)

A wrapper around Node.js `assert.throws`.

### Installation

```sh
yarn add it-throws -D
```

### Usage

```js
import { itThrows, itRejects } from 'it-throws';

it('Throw', () => {
  itThrows(() => {
    throw new Error('foo');
  }, 'foo');
});

it('Reject', () => {
  itRejects(async () => {
    throw new Error('foo');
  }, 'foo');
});
```

Is equivalent to:

```js
import * as assert from 'assert';

it('Throw', () => {
  assert.throws(
    () => {
      throw new Error('foo');
    },
    {
      message: 'foo',
    },
  );
});

it('Reject', () => {
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

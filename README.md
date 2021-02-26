# it-throws

[![Build Status](https://github.com/mgenware/it-throws/workflows/Build/badge.svg)](https://github.com/mgenware/it-throws/actions)
[![npm version](https://img.shields.io/npm/v/it-throws.svg?style=flat-square)](https://npmjs.com/package/it-throws)
[![Node.js Version](http://img.shields.io/node/v/it-throws.svg?style=flat-square)](https://nodejs.org/en/)

Wrapper around `assert.throws` and `assert.rejects`.

### Installation

```sh
yarn add it-throws -D
```

### Usage

```js
import { itThrows, itRejects } from 'it-throws';

it('Throws', () => {
  itThrows(() => {
    throw new Error('foo');
  }, 'foo');
});

it('Rejects', async () => {
  await itRejects(Promise.reject(new Error('foo')), 'foo');
});
```

Is equivalent to:

```js
import * as assert from 'assert';

it('Throws', () => {
  assert.throws(
    () => {
      throw new Error('foo');
    },
    {
      message: 'foo',
    },
  );
});

it('Rejects', async () => {
  await assert.rejects(Promise.reject(new Error('foo')), {
    message: 'foo',
  });
});
```

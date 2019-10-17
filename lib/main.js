const assert = require('assert');

module.exports = (block, message) => {
  assert.throws(block, { message });
};

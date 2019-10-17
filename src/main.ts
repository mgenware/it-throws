import * as assert from 'assert';

export default function(block: () => any, message: string): void {
  assert.throws(block, { message });
}

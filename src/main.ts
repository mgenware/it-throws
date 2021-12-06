import * as assert from 'assert';

export function itThrows(block: () => unknown, message: string | RegExp): void {
  assert.throws(block, { message });
}

export function itRejects(
  block: (() => Promise<unknown>) | Promise<unknown>,
  message: string | RegExp,
): Promise<void> {
  return assert.rejects(block, { message });
}

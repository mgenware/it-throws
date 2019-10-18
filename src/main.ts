import * as assert from 'assert';

export function itThrows(block: () => any, message: string): void {
  assert.throws(block, { message });
}

export function itRejects(
  block: (() => Promise<any>) | Promise<any>,
  message: string,
): Promise<any> {
  return assert.rejects(block, { message });
}

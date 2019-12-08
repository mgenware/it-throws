import * as assert from 'assert';

export function itThrows(block: () => any, message: string | RegExp): void {
  assert.throws(block, { message } as any);
}

export function itRejects(
  block: (() => Promise<any>) | Promise<any>,
  message: string | RegExp,
): Promise<any> {
  return assert.rejects(block, { message } as any);
}

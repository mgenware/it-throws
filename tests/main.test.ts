import { itThrows, itRejects } from '../';

it('Throws', () => {
  itThrows(() => {
    throw new Error('foo');
  }, 'foo');
});

it('Throws (regex)', () => {
  itThrows(() => {
    throw new Error('foo');
  }, /oo/);
});

it('Rejects', async () => {
  await itRejects(Promise.reject(new Error('foo')), 'foo');
});

it('Rejects (regex)', async () => {
  await itRejects(Promise.reject(new Error('foo')), /oo/);
});

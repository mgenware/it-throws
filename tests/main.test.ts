import { itThrows, itRejects } from '../';

it('Throws', () => {
  itThrows(() => {
    throw new Error('foo');
  }, 'foo');
});

it('Rejects', async () => {
  await itRejects(Promise.reject(new Error('foo')), 'foo');
});

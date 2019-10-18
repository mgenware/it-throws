import { itThrows, itRejects } from '../';

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

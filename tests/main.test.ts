import itThrows from '../';

it('Throw', () => {
  itThrows(() => {
    throw new Error('foo');
  }, 'foo');
});

it('Reject', () => {
  itThrows(async () => {
    throw new Error('foo');
  }, 'foo');
});

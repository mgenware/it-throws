import itThrows from '../';

it('Throw', () => {
  itThrows(() => {
    throw new Error('foo');
  }, 'foo');
});

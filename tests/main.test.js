const itThrows = require('../');

it('Throws', () => {
  itThrows(() => {
    throw new Error('a b c -==-=-');
  }, 'a b c -==-=-');
});

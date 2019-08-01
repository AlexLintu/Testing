const assert = require('assert');

// Testing Math object...
describe('Math', () => {
  // ..with .min method
  describe('.min', () => {
    it('returns the argument with the lowest value', () => {
      // Your test goes here
    });
    it('returns -Infinity when no arguments are provided', () => {
      // Your test goes here
    });
  });
});

// TEST 2
describe('+', () => {
  it('returns the sum of its arguments', () => {
    assert.ok(3 + 4 === 8);
  });
});


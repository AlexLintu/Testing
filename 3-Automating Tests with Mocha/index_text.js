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
    assert.ok(3 + 4 === 7);
  });
});

// TEST 3
const assert = require('assert');

// Naive approach
describe('.pop', () => {
  it('returns the last element in the array [naive]', () => {
    assert.ok(['padawan', 'knight'].pop() === 'knight');
  });
});

// 3 phase approach
describe('.pop', () => {
  it('returns the last element in the array [3phase]', () => {
    // Setup
    const knightString = 'knight';
    const jediPath = ['padawan', knightString];

    // Exercise
    const popped = jediPath.pop();

    // Verify
    assert.ok(popped === knightString);
  });
});

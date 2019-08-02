// Import of the assert Node module
const assert = require('assert');

// TEST 1
describe('+', () => {
  it('returns the sum of its arguments', () => {

    assert.ok(3 + 4 === 7);

  });
});

// TEST 2 - assert.ok
describe('-', () => {
  it('returns the difference of two values', () => {
    const bigNum = 100;
    const smallNum = 4;
    const expected = 96;

    const result = bigNum - smallNum;

    // Write assertion here
    assert.ok(result === expected);
  });
});

// TEST 3 - assert.equal
describe('-', () => {
  it('returns the difference of two values', () => {
    const bigNum = 100;
    const smallNum = 4;
    const expected = 96;

    const result = bigNum - smallNum;

    // Write assertion here
    assert.equal(result, expected);
  });
});
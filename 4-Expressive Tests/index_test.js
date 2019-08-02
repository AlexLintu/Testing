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

// TEST 4 - assert.strictEqual
describe('-', () => {
  it('returns the difference of two values', () => {
    const bigNum = 100;
    const smallNum = 4;
    const expected = 96;

    const result = bigNum - smallNum;

    // Write assertion here
    assert.strictEqual(result, expected);
  });
});

// TEST 5 - assert.deepEqual
describe('+', () => {
  it('returns the sum of two values', () => {
    // Setup
    let expected = { a: 3, b: 4, result: 7 };
    let sum = { a: 3, b: 4 };

    // Exercise
    sum.result = sum.a + sum.b;

    // Verify
    assert.deepEqual(sum, expected);
  });
});

// Arrays
describe('+', () => {
  it('returns the sum of two values', () => {
    // Setup
    let expected = [3, 4, 7];
    let sum = [3, 4];

    // Exercise
    sum.push(3 + 4);

    // Verify
    assert.deepEqual(sum, expected);
  });
});
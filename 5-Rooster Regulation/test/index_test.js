const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  // Test for the first method
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // 1. Setup
      const expected = 'cock-a-doodle-doo!';
      // 2. Exercise
      const actual = Rooster.announceDawn();
      // 3. Verify
      assert.equal(actual, expected);
    })
  })

  // Test for the second method
  describe('.timeAtDown', () => {
    it('returns its argument as a string', () => {
      // 1. Setup
      const inputNumber = 5;
      const expected = '5';
      // 2. Exercise
      const actual = Rooster.timeAtDawn(inputNumber);
      // 3. Verify
      assert.equal(actual, expected);

      // Checking for numbers below zero
      it('throws an error if passed a number less than 0', () => {
        // 1. Setup
        const inputNumber = -5;
        const expected = RangeError;
        // 2, 3. Exercise & Verify
        assert.throws(() => {
          Rooster.timeAtDawn(inputNumber);
        }, expected);
      })

      // Checking for numbers above 23
      it('throws an error if passed a number more than 23', () => {
        // 1. Setup
        const inputNumber = 25;
        const expected = RangeError;
        // 2, 3. Exercise & Verify
        assert.throws(() => {
          Rooster.timeAtDawn(inputNumber);
        }, expected);
      })
    })
  })
});
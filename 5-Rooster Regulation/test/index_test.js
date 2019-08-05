const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
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

  describe('.timeAtDown', () => {
    it('returns its argument as a string', () => {
      // 1. Setup
      const inputNumber = 5;
      const expected = '5';
      // 2. Exercise
      const actual = Rooster.timeAtDawn(inputNumber);
      // 3. Verify
      assert.equal(actual, expected);

      it('throws an error if passed a number less than 0', () => {

      })
    })
  })
});
const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // 1. Setup
      const expected = 'cock-a-doodle-doo!';
      // 2. Exercise
      // Call Rooster.announceDawn and store result in variable
      const result = Rooster.announceDawn();

      // 3. Verify
      // Use an assert method to compare actual and expected result
      assert.equal(result, expected);
    })
  })
});
const assert = require('assert');
const fs = require('fs');

// TEST 1
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

// TEST 4
describe('appendFileSync', () => {
  const path = './message.txt';

  // Mocha hook
  afterEach(() => {
    // Teardown: delete path
    fs.unlinkSync(path);
  })

  it('writes a string to text file at given path name', () => {

    // Setup
    const str = 'Hello Node.js';

    // Exercise: write to file
    fs.appendFileSync(path, str);

    // Verify: compare file contents to string
    const contents = fs.readileSync(path);
    assert.ok(contents.toString() === str);



  });
});
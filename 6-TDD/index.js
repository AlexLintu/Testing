const Calculate = {
  sum(inputArr) {
    const arrSum = inputArr.reduce((a, b) => a + b, 0);
    return arrSum;
  }
}

module.exports = Calculate;
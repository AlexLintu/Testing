const Calculate = {
  factorial(inputNum) {
    if (inputNum === 1 || inputNum === 0) {
      return 1;
    }
    return inputNum * this.factorial(inputNum - 1);
  }
}

module.exports = Calculate;
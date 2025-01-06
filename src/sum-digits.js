const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let numSum = 0;
  let numStr = n.toString();
  let numLen = numStr.length;
  while ( numLen > 1) {
    numSum = 0;
    for (let i = 0; i < numLen; i += 1) {
      numSum += Number(numStr.charAt(i))
    }
    numStr = numSum.toString();
    numLen = numStr.length;
  }
  return numSum;
}

module.exports = {
  getSumOfDigits
};

/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function (digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  let maxArr = [0, 10, 100, 1000, 10000, 100000]
  let max = maxArr[digits];

  for (let i = 0; i < max; i++) {
    factor_0 = i;
    for (let j = 0; j < max; j++) {
      factor_1 = j;
      let multiple = i * j;
      if (multiple.toString() === multiple.toString().split('').reverse().join('') && palindromeNumber < multiple) {

        palindromeNumber = multiple;

      }
    }
  }

  return {
    factor_0, factor_1, palindromeNumber
  };
};
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arrayOfArrays) {
  let initialCats = 0;
  arrayOfArrays.map( array => array.map( value => value == '^^' ? initialCats++ : 0))
  return initialCats;
}


module.exports = {
  countCats
};

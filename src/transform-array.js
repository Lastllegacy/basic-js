const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} array initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if(!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  const array = JSON.parse(JSON.stringify(arr));
  let transformedArr = [];
  if(array[0] == '--discard-next') {
    array.splice(0,2);
  }
  for (let [index, key] of array.entries()) {
    if (key == "--double-next") {
      if (array[index + 1]) {
        transformedArr.push(array[index + 1]);
      }
    } else if (key == "--double-prev") {
      if (array[index - 1]) {
        transformedArr.push(array[index - 1]);
      }
    } else if (key == "--discard-prev") {
      if (array[index - 1]) {
        transformedArr.splice(transformedArr.length - 1, 1);
      }
    } else if (key == "--discard-next") {
      if (array[index + 1]) {
        array.splice(index,2)
      }
    } else {
      transformedArr.push(key);
    }
  }
  return transformedArr;
}

console.log(
  transform([
    "--discard-next",
    10,
    28,
    18,
    "--discard-next",
    20,
    "--discard-prev",
  ])
);

module.exports = {
  transform,
};

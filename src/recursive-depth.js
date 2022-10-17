const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
// class DepthCalculator {
//   answer = 1
//   arrayOfDepths = []
//   depth = 0
//   calculateDepth(arr) {
//     let isArray = 0
//     for (let value of arr) {

//       if(Array.isArray(value) && !isArray) {
//         isArray = 1
//         this.answer+=1;
//         this.depth+=1;
//         this.calculateDepth(value)
//       } else if (Array.isArray(value)) {
//         this.calculateDepth(value)
//       }
      
//     }
//     return this.answer
//   }
// }

class DepthCalculator {
  length = 1
  calculateDepth(arr) {
    let length = 1;
    while(arr.some(value => Array.isArray(value) || value === [] ) ) {
      arr = arr.flat();
      this.length+=1;
    }
    length = this.length;
    this.length =1 ;
    return length
  }
  
}

const calculatePleaseSome = new DepthCalculator() 
console.log(calculatePleaseSome.calculateDepth([1,[2,[3,[4,[123]]]],[5,[123],7,[123,[123,[123,[123]]]]],[6,[7]]]))
console.log(calculatePleaseSome.calculateDepth([123]))
module.exports = {
  DepthCalculator
};

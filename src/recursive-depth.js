const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

   constructor(firstName, lastName) {
     this.max = 0;    
    }

    calculateDepth(arr, depth = 0) {
    if (depth === 0) {
      this.max = 1;
    }
    depth = depth + 1;
    arr.forEach(value => {
       if (value === null || value === undefined || this.isNan(value)) {
        } else if (value.constructor !== Array) {       
         } else {
         return this.calculateDepth(value, depth);
       }
      });
      this.max = Math.max(depth, this.max);
      depth = depth - 1;
      return this.max;
   }
     
    isNan(value) {
      return value !== value;
    }

  };

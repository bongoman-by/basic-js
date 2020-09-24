const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  function isNan(value) {
    return value !== value;
  }

  if (arr === null || arr === undefined || isNan(arr)) {
    throw Error;
  }

  if (arr.constructor !== Array) {
    throw Error;
  }
 
  let array = copyArray(arr);
  function copyArray(arr) {
    return arr.slice();
  }

  if (array.length === 0) {
    return array;
  }
  
  const length = array.length - 1;

  for (let index = 0; index < array.length; index++) {
    switch (array[index]) {
      case '--discard-next':
        if (index < length) {
          array[index] = 'delete';
          array[index + 1]  = 'delete';
        }else{
          array[index] = 'delete';
        }
        break;
      case '--discard-prev':
        if (index > 0) {
          array[index] = 'delete';
          array[index - 1]  = 'delete';
        }else{
          array[index] = 'delete';
        }
        break;
      case '--double-next':
        if (index < length) {
          array[index] = array[index + 1];
        }else{
          array[index] = 'delete';
        }
        break;
      case '--double-prev':
        if (index > 0) {
          array[index] = array[index - 1];
        }else{
          array[index] = 'delete';
        }
        break;
      default:
        break;
    }
  }

  return array.filter(item => item !== 'delete');
};
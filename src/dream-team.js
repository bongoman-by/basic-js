const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members === null || members === undefined || members === NaN) {
    return false;  
  }  if (members.constructor !== Array) {
    return false;  
  }
  let array = members.filter(item => typeof(item) === 'string');
  for(let index = 0; index < array.length; index++) {
    array[index] = array[index].trim().toUpperCase();
  }
  array.sort();
  let result = '';
  for(let index = 0; index < array.length; index++) {
    result = `${result}${array[index][0]}`;
  }
  return result;
};

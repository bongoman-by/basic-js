const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
 
 let countOfCats = 0;
  matrix.forEach(element => {
    countOfCats = countOfCats + element.filter(item => item === '^^').length;
  });

  return countOfCats;

};

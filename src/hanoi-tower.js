const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const countOfTurns = 2 ** disksNumber - 1;
  const seconds = 3600 * countOfTurns / turnsSpeed;

  return {
    'turns':countOfTurns,
    'seconds': Math.floor(seconds),
  };
};

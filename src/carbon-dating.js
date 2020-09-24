const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const activity = +sampleActivity;
  if (isNaN(NaN)) {
    return false;  
  }
  if (typeof(activity) === 'number' && activity > 0) {
    const result = Math.ceil(Math.log(MODERN_ACTIVITY / activity) / (0.693 / HALF_LIFE_PERIOD));
    if (result > 0) {
      return result;
    }
    return false;
  }
  return false;
};
const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  let month = new Date();
  try {
    month = date.getMonth();
  } catch (error) {
    throw Error;
  }
  if (!isValidDate(date)) {
    throw Error;
  }
  if (month < 2 || month === 11) {
    return 'winter';
  } else {
    if (month > 1 && month < 5) {
      return 'spring';
    } else {
      if (month > 4 && month < 8) {
        return 'summer';
      } else {
        return 'autumn';
      }
    }
  }

  function isValidDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
  }

};
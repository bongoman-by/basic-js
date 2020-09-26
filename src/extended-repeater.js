const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

    const getStr = (value) => {
        let result = '';
        return String(value);
    };

    const getOptions = (value) => {
        const result = {
            repeatTimes: 1,
            separator: '+',
            addition: '',
            additionRepeatTimes: 1,
            additionSeparator: '|'
        };
        if (type(value) === "object") {
            for (let key in result) {
                if (key in value) {
                    if (type(result[key]) === "number") {
                        result[key] = (+value[key] > 0) ? +value[key] : result[key];
                    } else {
                        result[key] = value[key];                     
                    }
    
                }
            }
        }

        return result;
    };

    function type(value) {
        var regex = /^\[object (\S+?)\]$/;
        var matches = Object.prototype.toString.call(value).match(regex) || [];

        return (matches[1] || 'undefined').toLowerCase();
    }

    const makeString = (str, repeatTimes, separator) => {
        let result = '';
        for (let index = 0; index < repeatTimes; index++) {
            result = `${result}${str}${(index === repeatTimes - 1) ? '' : separator}`;
        }
        return result;
    };

    const currentStr = getStr(str);

    const currentOptions = getOptions(options);

    const additionStr = makeString(
        currentOptions.addition,
        currentOptions.additionRepeatTimes,
        currentOptions.additionSeparator);

    const result = makeString(
        `${currentStr}${additionStr}`,
        currentOptions.repeatTimes,
        currentOptions.separator);

    return result;

};

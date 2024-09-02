const sumAll = function(beginning, end) {
    if (beginning < 0 || end < 0) {
        return "ERROR";
    } else if (beginning % 1 !== 0 || end % 1 !== 0) {
        return "ERROR";
    } else if (typeof beginning !== "number" || typeof end !== "number") {
        return "ERROR";
    }

    if (beginning > end) {
        let extra = beginning;
        beginning = end;
        end = extra;
    }

    let sum = 0;
    for (let i = beginning; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

const removeFromArray = function(array) {
    for (let i = 1; i < arguments.length; i++) {
            while (array.includes(arguments[i])) {
            array.splice(array.indexOf(arguments[i]), 1)
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

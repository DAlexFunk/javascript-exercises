const palindromes = function (phrase) {
    let allowableLetters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
                            'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z',
                            'x', 'c', 'v', 'b', 'n', 'm',
                            '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let arr = phrase.split("").map((char) => char.toLowerCase());
    arr = arr.filter((char) => allowableLetters.includes(char));

    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr.toReversed()[i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

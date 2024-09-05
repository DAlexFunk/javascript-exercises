const fibonacci = function(n) {
    n = Number(n);
    
    if (n === 0) {
        return 0;
    } else if (n < 0) {
        return "OOPS";
    }
    
    let sequence = [1,1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i-1] + sequence[i-2];
    }
    return sequence[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;

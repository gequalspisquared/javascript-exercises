const sumAll = function(num1, num2) {
    // Check input arguments
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number') return 'ERROR'; 
    if (num1 < 0 || num2 < 0) return 'ERROR';

    // Organize inputs
    let big = num1;
    let small = num2;
    if (num2 > num1) { big = num2; small = num1; }

    // Sum
    let sum = 0;
    for (let i = small; i <= big; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

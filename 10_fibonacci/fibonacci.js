const fibonacci = function(num) {
    num = Number(num);
    if (num < 0) return "OOPS";
    if (num < 3) return 1;

    let num1 = 1;
    let num2 = 1;
    let tmp;
    for (let i = 2; i < num; i++) {
        tmp = num2;
        num2 += num1;
        num1 = tmp;
    }

    return num2;
};

// Do not edit below this line
module.exports = fibonacci;

const palindromes = function (words) {
    const forward = words.toLowerCase().replace(/[^a-z]/g, '');
    const backward = forward.split('').reverse().join('');
    if (forward === backward) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;

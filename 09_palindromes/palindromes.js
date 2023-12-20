const palindromes = function (str) {
    const s = str.toLowerCase();
    const arr = [...s.matchAll(/[a-z]|[0-9]/g)].join('');
    console.log(arr)
    return arr === arr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;

const reverseString = function(word) {
    let output = '';
    const chars = word.split('');
    chars.reverse();
    for (const char of chars) {
        output += char;
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;

const repeatString = function(word, num) {
    if (num < 0) {
        return "ERROR";
    }
    let output = '';
    while (num--) {
        output += word;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;

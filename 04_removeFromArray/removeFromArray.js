const removeFromArray = function(arr, ...nums) {
    for (const num of nums) {
        let index = arr.indexOf(num);
        while (index > -1) {
            arr.splice(index, 1);
            index = arr.indexOf(num);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

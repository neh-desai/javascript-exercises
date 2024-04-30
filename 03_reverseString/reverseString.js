const reverseString = function(input) {
    let inputReverse = '';
    for (let i = input.length-1; i>=0; i--){
        inputReverse += input.charAt(i);
    }
    return inputReverse;
};

// Do not edit below this line
module.exports = reverseString;

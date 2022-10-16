const reverseString = function(string) {
    let solution = '' ;
    for (let i = string.length; i >= 0; i--) {
        solution += string.charAt(i) ;
    }
    return solution ;
};

// Do not edit below this line
module.exports = reverseString;

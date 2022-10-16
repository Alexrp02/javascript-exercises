const repeatString = function(string, number) {
    if (number < 0) {
        return ('ERROR') ;
    }
    let newstring = '' ;
    for (let i = 0; i  < number; i++) {
        newstring += string ;
    }
    return newstring ;
};

// Do not edit below this line
module.exports = repeatString;

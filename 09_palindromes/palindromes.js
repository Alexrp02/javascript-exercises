const palindromes = function (word) {
    let wordReversed = reverseStringWithout(word).replace(/\W|_/g, '');
    let wordWithoutPunct = word.replace(/\W|_/g, '');
    console.log(wordReversed) ;
    console.log(wordWithoutPunct) ;
    let solution;
    wordReversed.toLowerCase() == wordWithoutPunct.toLowerCase() ? solution=true : solution=false ;

    return solution ;
};

const reverseStringWithout = function(string) {
    let solution = '' ;
    for (let i = string.length; i >= 0; i--) {    
        solution += string.charAt(i) ;
    }
    return solution ;
};

palindromes('racecar!') ;

// Do not edit below this line
module.exports = palindromes;

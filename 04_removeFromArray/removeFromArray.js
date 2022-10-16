const removeFromArray = function(array, ...args) {
    let arraySolution = [] ;
    arraySolution = array.filter(x => x!==args[0]) ;
    for (let i = 1; i < args.length; i++) {
        arraySolution = arraySolution.filter(x => x!==args[i]) ;
    }
    return arraySolution;
};

// Do not edit below this line
module.exports = removeFromArray;

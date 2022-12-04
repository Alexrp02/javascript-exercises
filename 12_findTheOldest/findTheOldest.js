const findTheOldest = function(people) {
    const date = new Date ;
    let sol = people.reduce((accumulator, actual) => {
        if (!actual.yearOfDeath)
            actual.yearOfDeath = date.getFullYear() ;
        if (!accumulator.yearOfDeath)
            accumulator.yearOfDeath = date.getFullYear() ;
        if ((actual.yearOfDeath-actual.yearOfBirth) >= (accumulator.yearOfDeath-accumulator.yearOfBirth)) 
            accumulator = actual ;
        return accumulator ;
    }, people[0]) ;
    return sol ;
    
};

// Do not edit below this line
module.exports = findTheOldest;

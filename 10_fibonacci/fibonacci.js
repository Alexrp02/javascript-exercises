const fibonacci = function(number) {
let sol = 0 ;
let val ;
let prev ;
number = Number(number) ;
if (number < 0) {
    return "OOPS" ;
}else if (number == 1 ) {
    sol = 1 ;
}else if (number > 1 ) {
    prev = 0 ;
    val = 1 ;
    sol = 1 ;
    for(let i=2 ; i<=number ; i++) {
        sol = prev+val ;
        prev = val ;
        val = sol ;
    }
}

return sol ;
};

// Do not edit below this line
module.exports = fibonacci;

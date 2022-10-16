const add = function(num1, num2) {
	return (num1+num2) ;
};

const subtract = function(num1, num2) {
	return (num1-num2) ;
};

const sum = function(array) {
  let solution = 0 ;
	array.forEach(element => {
    solution += element ;
  });
  return solution ;
};

const multiply = function(array) {
  let solution = 1 ;
  array.forEach(element => {
    solution*=element ;
  }
    ) ;
    return solution ;
};

const power = function(number, pow) {
  let solution = 1 ;
  for (let i = 0; i < pow; i++) {
    solution *= number ;
  }
	return (solution) ;
};

const factorial = function(fact) {
  let solution = 1 ;
  for (let i = 1; i <= fact; i++) {
    solution *= i ; 
  }
  return solution ;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

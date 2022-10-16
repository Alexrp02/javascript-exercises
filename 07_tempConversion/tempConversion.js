const ctof = function(degrees) {
  let solution = 0 ;
  solution = degrees * 9 / 5 + 32;
  solution = Math.round(solution*10)/10 ;
  return (solution) ;
};

const ftoc = function(degrees) {
  let solution = 0 ;
  solution = (degrees-32) * 5 / 9 ;
  solution = Math.round(solution*10)/10 ;
  return (solution) ;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

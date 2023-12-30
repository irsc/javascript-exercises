const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a -b;
};

const sum = function(a) {
	 const suma = a.reduce((total,element)=>total + element,0);
   return suma;
};

const multiply = function([...a]) {
  const mult = a.reduce((total,element)=>total * element,1);
  return mult;
};

const power = function(base, exp) {
	return base**exp;
};

const factorial = function(number) {
  let total = 1;
    while (number > 1) {
      total = total*number;
      number--;
    }
    return total;
};

// This is another implementation of Factorial that uses recursion
// THANKS to @ThirtyThreeB!
const recursiveFactorial = function (n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
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

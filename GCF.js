//Checks if a valid equation was used
function validateQuadEq(equation) {
  let arr = [];
  // removes spaces from string
  equation = equation.replaceAll(" ", "");
  // verifies equation is set equal to 0
  // console.log(equation)
  if (!equation.includes("=0")) {
    return false;
  }
  // removes text to up to x^10
  let check = ["x^2", "x^3", "x^4", "x^5", "x^6", "x^7", "x^8", "x^9", "x^10", "x", "=0"];
    for (let i = 0; i < check.length; i++) {
      equation = equation.replaceAll(check[i], "");
      // console.log(equation)
    }
    equation = equation.replaceAll("-", "+"); // changes all "-" to "+"
    // converts string to number and verifies validity, then converts to array and removes any 0 coefficients 
    if (Number.isInteger(Number(equation.replaceAll("+", "")))) {
      arr = equation.split("+");
      return arr.map(Number).filter(num => num !== 0);
    } else {
      return false;
    }
  }

function GCF(arr) {
  let arrTest = [];
  let answer;
  // Loop from the smallest number to 0 and stops when all numbers in array have modulus of 0.  Then returns the factor (i);
  for (let i = Math.min(...arr); i > 0; i--) {
    arrTest = arr.map((x) => x % i);
    // console.log(arrTest);
    if (!Math.max(...arrTest)) {
      return (answer = i);
    }
  }
}

//combines the 2 functions to accepts a string polynomial up to x^10
function gcfCalc(equation) {
  if (!validateQuadEq(equation)) {
    console.log('Invalid equation must be a polynomial of x^10 or less and set equal to 0, eg. "-72x^7 + 216x^5 - 144x^4 + 288x^3 - 360x + 432 = 0"');
  } else {
    let arr = validateQuadEq(equation);
    let answer = GCF(arr);
    console.log("GCF : ", answer);
  }
}
let quadEq = "6x^2 + 18x - 54 = 0";
gcfCalc(quadEq);

gcfCalc("28x^5 - 40x^4 + 80x^3 + 100x^2 - 32x + 16 = 0");
// Output: GCF: 6

quadEq = "18x^4 + 42x^3 - 66x^2 + 30x - 54 = 0";
gcfCalc(quadEq);

quadEq = "35x^6 - 70x^5 + 105x^3 - 140x + 210 = 0"
gcfCalc(quadEq);

quadEq = "24x^10 - 96x^8 + 72x^7 + 144x^5 - 48x^2 + 120 = 0"
gcfCalc(quadEq);

quadEq = "-45x^9 + 135x^6 - 90x^4 + 180x^2 - 225 = 0"
gcfCalc(quadEq);


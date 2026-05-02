let quadequation1 = "-53x^2 + 6x + 6 = 0";
// let quadequation1 = "8x^2 + 40x + 37 = 0";

//Checks if a valid equation was used
function validateQuadEq(quadEq) {
  let check = ["x^2 + ", "x + ", " = "];
  if (quadEq.includes("x^2")) {
    for (let i = 0; i < check.length; i++) {
      quadEq = quadEq.replaceAll(check[i], "");
      // console.log(quadEq)
    }
    quadEq = Number(quadEq);
    if (Number.isInteger(quadEq)) {
      return true;
    }
  } else {
    return false;
  }
}

function fracReduce(num, denom, root = "", imgn = "") {
  let answer;
  console.log("Reduce funct", num / denom);
  if (!Number.isInteger(num / denom)) {
    let lesser = Math.abs(num);
    let greater = Math.abs(denom);
    if (lesser > greater) {
      lesser = Math.abs(denom);
      greater = Math.abs(num);
    } else {
      let lesser = num;
      let greater = denom;
    }
    for (let i = Math.abs(lesser); i > 0; i--) {
      //   console.log(" lesser % i", lesser % i);
      //   console.log("greater % i", greater % i);
      if (!(lesser % i || greater % i)) {
        console.log("i", i);
        num = num / i;
        denom = denom / i;
        {
          if (root) {
            num = "";
          }
        }
        answer = num + imgn + root + "/" + denom;
        return answer;
      }
    }
  } else {
    answer = num / denom;
    return answer;
  }
}

function quadraticFormulaCalc(quadEq) {
  if (!validateQuadEq(quadEq)) {
    console.log(
      "Invalid equation must be in the form of 'ax^2 + bx + c = 0', where a, b, and c are integers.",
    );
    return;
  }
  let a = "";
  let b = "";
  let c = "";
  let answer1;
  let answer2;

  if (quadEq.indexOf("x^2") === 0) {
    a = 1;
  } else {
    for (let i = 0; i < quadEq.indexOf("x^2"); i++) {
      a += quadEq[i];
    }
  }

  a = Number(a);
  console.log("a", a);
  console.log(typeof a);

  if (quadEq.indexOf("x^2") + 6 === quadEq.indexOf("x ")) {
    b = 1;
  } else {
    for (let i = quadEq.indexOf("x^2") + 6; i < quadEq.indexOf("x "); i++) {
      b += quadEq[i];
    }
  }
  b = Number(b);
  console.log("b", b);
  console.log(typeof b);

  for (let i = quadEq.indexOf("x ") + 4; i < quadEq.indexOf(" = "); i++) {
    c += quadEq[i];
  }
  c = Number(c);
  console.log("c", c);
  console.log(typeof c);

  let minusB = -b;
  let square = b * b - 4 * a * c;
  let twoA = 2 * a;
  let squareRtPos;
  let squareRtNeg;
  let partRt;
  let imaginary = "";
  let firstPart;
  let secondPartPos;
  let secondPartNeg;

  if (square < 0) {
    square *= -1;
    imaginary = "i";
  } else {
    imaginary = 0;
  }

  //Get the square root if and integer otherwise returns simplified radical
  if (Number.isInteger(Math.sqrt(square))) {
      squareRtPos = Math.sqrt(square);
      squareRtNeg = Math.sqrt(square) * -1;
      if (!imaginary) {
      secondPartPos = squareRtPos;
      secondPartNeg = squareRtNeg;

      console.log("squarePartPos", secondPartPos);
      console.log("squarePartPos", typeof secondPartPos);
      console.log("squarePartNeg", secondPartNeg);
      console.log("squarePartNeg", typeof secondPartNeg);
    } else {

    }
  } else {
    console.log("sqrt", Math.sqrt(square));
    for (let i = Math.floor(Math.sqrt(square)); i > 0; i--) {
      if (square % (i * i) === 0) {
        squareRtPos = "√" + square / (i * i);
        squareRtNeg = "√" + square / (i * i);
        secondPartPos = " + " + fracReduce(i, twoA, squareRtPos, imaginary);
        secondPartNeg = " - " + fracReduce(i, twoA, squareRtNeg, imaginary);
        break;
      }
    }
    console.log("this starts", square);
  }
  let numeratorPos = minusB + secondPartPos;
  let numeratorNeg = minusB - secondPartPos;
  answer1 = fracReduce(numeratorPos, twoA);
  answer2 = fracReduce(numeratorNeg, twoA);

  console.log("minB", minusB);
  console.log("square", square);
  console.log("2a", twoA);

  //   answer1 = `${firstPart + secondPartPos}`;
  //   answer2 = `${firstPart + secondPartNeg}`;

  console.log(answer1 + ", " + answer2);

  // TESTING TRUE / FALSE RESOLUTION
  //   let asdf = "";
  //   if(asdf){
  //     console.log("Addition test " + asdf + " is true" );
  //   } else {
  //     console.log("Addition test " + asdf + " is false" );
  //   }

  console.log(6 % 2);

  // if(((b * b) - 4 * a * c) < 0){

  // }
  // answer1 = (-b + Math.sqrt((b * b) - 4 * a * c))

  // console.log(`${(-b + Math.sqrt((b * b) - 4 * a * c))/(2 * a)}

  // ${(- b - Math.sqrt((b*b) - 4 * a * c)) / (2 * a)}`)
  //     // console.log(`${Math.sqrt(((b * b) - (4 * a * c)))}`)
}

quadraticFormulaCalc(quadequation1);

// console.log("math tests", Math.sqrt(9));

// console.log("validate", validateQuadEq(quadequation1))

//  let part = Math.floor(Math.sqrt(square))
//  console.log("part", part)

// if (testWord.includes(!"a")){
//     console.log(`${testWord} does not include "a"`)
// }

// quadraticFormulaCalc(quadequation1);

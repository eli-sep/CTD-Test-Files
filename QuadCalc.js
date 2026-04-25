let quadequation1 = "3x^2 + 7x + 2 = 0";

function validateChar(quadEq){
    let check = ["x^2 + ", "x + ", " = "];
    if (quadEq.includes("x^2")){
    for(let i = 0; i < check.length; i++){
        quadEq = quadEq.replaceAll(check[i], "");
        // console.log(quadEq)
    }
    quadEq = Number(quadEq)
    if(Number.isInteger(quadEq)){
        return true
    }
} else {return false}
}

function quadraticFormulaCalc(quadEq){
    if(!(validateChar(quadEq))){
        console.log("Invalid equation must be in the form of 'ax^2 + bx + c = 0', where a, b, and c are integers.")
        return 
    }
    let a = "";
    let b = "";
    let c = "";
    let answer1;
    let answer2;
    // console.log(quadEq)
    // console.log("index of", quadEq.indexOf("x^"))
    if(quadEq.indexOf("x^2") === 0){
        a = 1;
    } else{
        for(let i = 0; i < quadEq.indexOf("x^2"); i++){
            a += quadEq[i];
        }
    }

    a = Number(a);
    console.log("a", a);
    console.log(typeof(a));

    if(quadEq.indexOf("x^2") + 6 === quadEq.indexOf("x ")){
        b = 1;
    } else {
        for(let i = quadEq.indexOf("x^2") + 6; i < quadEq.indexOf("x "); i++){
            b += quadEq[i];
        }
    }
    b = Number(b);
    console.log("b", b);
    console.log(typeof(b));

    for(let i = quadEq.indexOf("x ") + 4; i < quadEq.indexOf(" = "); i++){
        c += quadEq[i];
    }
    c = Number(c);
    console.log("c", c);
    console.log(typeof(c));

let minusB = -b;
let b2minus4ac = (b * b - 4 * a * c);
let twoA = 2 * a;
let imagine = "";

if (b2minus4ac < 0){
    b2minus4ac *= -1;
    imagine = "i";
}

if (Number.isInteger(Math.sqrt(b2minus4ac))){
    b2minus4ac = Math.sqrt(b2minus4ac);
} else {
    b2minus4ac = "√" + b2minus4ac;
}

console.log("minB", minusB)
console.log("sqare", b2minus4ac)
console.log("2a", twoA)

console.log(minusB)

    if(((b * b) - 4 * a * c) < 0){

    } 
    answer1 = (-b + Math.sqrt((b * b) - 4 * a * c))

    console.log(`${(-b + Math.sqrt((b * b) - 4 * a * c))/(2 * a)} 
    
    
    ${(- b - Math.sqrt((b*b) - 4 * a * c)) / (2 * a)}`)
        // console.log(`${Math.sqrt(((b * b) - (4 * a * c)))}`)


}

quadraticFormulaCalc(quadequation1);


// console.log("math tests", Math.sqrt(9));

// console.log("validate", validateQuadEq(quadequation1))




// if (testWord.includes(!"a")){
    //     console.log(`${testWord} does not include "a"`)
    // }
    

// quadraticFormulaCalc(quadequation1);
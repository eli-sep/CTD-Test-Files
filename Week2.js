const numbers = [4, 14, 15, 19];
const calculateTotal = arr =>{
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    } 
    return sum;
}

console.log("Q10: ", calculateTotal(numbers));

// ---------- QUESTION 11 ----------
// Write two functions called 'findEvens' and 'findOdds' that each take one array parameter and each returns a NEW Array of all the even or odd numbers as indicated. NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array. To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()

// EXAMPLE LOG:
//  console.log("Q11 evens: ", findEvens([10,2,3,19,7,6,93]));
//  console.log("Q11 odds: ", findOdds([10,2,3,19,7,6,93]));

// EXAMPLE OUTPUT:
//  Q11 evens: [10,2,6]
//  Q11 odds: [3,19,7,93]

// PUT YOUR CODE HERE

const findEvens = arr => {
    let evens = []
}

const full = ["Elias", "Winnie", "Ines", "Vivien"];

function insertInArray(arr) {
    let first = arr.slice(0, 1);
    let second = arr.slice(1);
    return first.concat([0], second);
}

console.log("Q8:                         ", insertInArray(full));
console.log("Q8 original array: ", full);

console.log(full.slice(0, 1));
console.log(full.slice(1));
console.log(full);
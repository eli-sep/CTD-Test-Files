// Finding the GCF of two numbers

function getGCF(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
    console.log(a);
    console.log(b);
    console.log(remainder);
 }

  return a;
}

// Finding the GCF of several numbers inside the string

function getGCFfromString(input) {
  // Turn the string into an array of numbers
  let numbers = input.split(" ").map(Number);

  // Starting with the first number

  let gcf = numbers[0];

  // Comparing the current GCF with each next number

  for (let i = 1; i < numbers.length; i++) {
    gcf = getGCF(gcf, numbers[i]);
 }

  return gcf;
}

console.log(getGCFfromString("28 40 80 100 32 16"))
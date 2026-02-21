


// function sum(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function divide(a, b) {
//   return a / b;
// }

// function doOperation(a, b, op) {
//   return op(a, b)
// }

// console.log(sum(1, 2))

let b = 5;

function sum(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b ;
}

function doArith(a,b, fn) {
    return fn(a,b)
}

const ans1 = doArith(1,b, sum);
const ans2 = doArith(1,b, sub);

console.log(ans1);
console.log(ans2);
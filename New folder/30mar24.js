function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculator(mathFun, a, b) {
  let calc = mathFun(a, b);
  console.log(calc);
}

let calcMethods = [add, subtract, multiply, divide];

for (let i = 0; i < calcMethods.length; i++) {
  calculator(calcMethods[i], 40, 20);
}

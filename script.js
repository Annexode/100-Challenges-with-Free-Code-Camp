//CALCULATOR

let num1 = 8;
let num2 = 2;
let result = document.getElementById("result");

let num1_el = document.getElementById("num1_el");
let num2_el = document.getElementById("num2_el");

num1_el.innerHTML = num1;
num2_el.innerHTML = num2;

function add() {
  let addition = num1 + num2;
  result.innerHTML = "SUM:" +" " + addition;
  console.log(addition);
}

function substract() {
  let substraction = num1 - num2;
  result.innerHTML = "SUM:" +" " + substraction;
  console.log(substraction);
}

function divide() {
  let division = num1 / num2;
  result.innerHTML = "SUM:" +" " + division;
  console.log(division);
}

function multiply() {
  let multiplication = num1 * num2;
  result.innerHTML = "SUM:" +" " + multiplication;
  console.log(multiplication);
}



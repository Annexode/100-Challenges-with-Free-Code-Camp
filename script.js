let countingDisplay = document.getElementById("counting");
let previousCounting = document.getElementById("previousEntries");

let count = 0;
function counts() {
  //count = count + 1; OR
  count += 1;
  countingDisplay.innerText = count;
  console.log(count);
}

function save() {
  let previuosEntriesString = count + " - ";
  previousCounting.textContent += previuosEntriesString;
  countingDisplay.innerText = 0;
  count = 0;
  console.log(count);
}

// RECAP
firstName = "Annexode";
lastName = "IGIRANEZA";

fullNames = firstName + " " + lastName;
console.log(fullNames);

let myPoints = 3;
function add3Points() {
  myPoints = myPoints + 3;
}

function remove1Point() {
  myPoints = myPoints - 1;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
console.log(myPoints);

//NIKE SHOES

let message = document.getElementById("error");
function errorMessage() {
  console.log("clicked");
  message.innerHTML = "Try again";
}

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



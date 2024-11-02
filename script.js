let countingDisplay = document.getElementById("counting");




let count = 0;
function counts() {
  count = count + 1;
  countingDisplay.innerText = count;
  console.log(count);
}

function save() {
  console.log(count);
  
}

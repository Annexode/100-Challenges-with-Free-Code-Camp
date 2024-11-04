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

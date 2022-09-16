//Ask numbers, arrange in ascending order, sum numbers
let numbers = [];

function sumInput() {
  while (true) {
    let nbr = prompt(`Enter a number`);

    if (nbr === "" || nbr === null || !isFinite(nbr)) break;

    numbers.push(+nbr);
  }

  numbers.sort((a, b) => a - b);
  console.log(numbers);
  alert("Array in ascending order: " + numbers);

  let sumNumbers = 0;

  for (let nbr of numbers) {
    sumNumbers += nbr;
  }

  alert("Sum of array's elements = " + sumNumbers);
}

//Display the first element of an array
let files = ["js", "css", "html"];

function firstElem() {
  console.log(files[0]);
  alert("The first element of array: " + files[0]);
}

let mess = [0, 1, false, 2, undefined, "", 3, null];

//Filter from unwanted values
function deleteMess(value) {
  return value != false && value != "" && value != undefined && value != null;
}

let filtered = [0, 1, false, 2, undefined, "", 3, null].filter(deleteMess);

function showFiltered() {
  alert("All unwanted values are cleared! Your new array is: " + filtered);
}

//Find the index of the array whose length is > 3
let multinumbers = [
  [1, 2],
  [1, 2, 3],
  [1, 2, 3, 4],
];

function showIndex() {
  for (let i = 0; i < multinumbers.length; i++) {
    if (multinumbers[i].length > 3) alert("Array's index: " + i);
  }
}

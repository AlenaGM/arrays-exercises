//Спросить значения, рассортировать по возрастанию, суммировать
let numbers = [];

function sumInput(){

    while (true){
    let nbr = prompt(`Введите число`);

    if (nbr === "" || nbr === null || !isFinite(nbr)) break;

    numbers.push(+nbr);
  }

  numbers.sort((a, b) => a - b);
  console.log(numbers);
  alert ('Массив по возрастанию: ' + numbers);

  let sumNumbers = 0;

  for (let nbr of numbers) {
    sumNumbers += nbr;
  }

  console.log(sumNumbers);
  alert ('Сумма значений массива = ' + sumNumbers);
};

//Вывести на экран 1-й элемент массива
let files = ["js", "css", "html"];

function firstElem(){

  console.log(files[0]);
  alert('Первый элемент массива: ' + files[0]);
};


let mess = [0, 1, false, 2, undefined, '', 3, null];

//Убрать лишнее из массива
function deleteMess(value) {
  return value != false && value != '' && value != undefined && value != null;
};

let filtered = [0, 1, false, 2, undefined, '', 3, null].filter(deleteMess);

console.log(filtered);

function showFiltered() {

  alert('Все лишнее убрали, вот: ' + filtered);
};

//Найти индекс массива, длина которого > 3
let multinumbers = [[1,2], [1,2,3], [1,2,3,4]];

function showIndex(){

for (let i = 0; i < multinumbers.length; i++) {
    if (multinumbers[i].length > 3)
      alert('Индекс массива: ' + i);
  }
}


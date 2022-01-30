function sumInput(){
  let numbers = [];

  while (true) {

    let nbr = prompt(`Введите число`);

    if (nbr === "" || nbr === null || !isFinite(nbr)) break;

    numbers.push(+nbr);
}

numbers.sort((a, b) => a - b);
alert(numbers);

let sum = 0;
for (let nbr of numbers) {
    sum += nbr;
}
return sum;


};

alert(sumInput());


function firstElem(){
  let files = ["js", "css", "html"];
  alert(files[0]);
};

let mess = [0, 1, false, 2, undefined, '', 3, null];

function deleteMess(value) {
  return value != false && value != '' && value != undefined && value != null;
}

let filtered = [0, 1, false, 2, undefined, '', 3, null].filter(deleteMess);

console.log(filtered);

function showMess(){
  alert(filtered);
}


function showIndex(){
  let multinumbers = [[1,2], [1,2,3], [1,2,3,4]];

  if (multinumbers[0].length > 3) {alert('Индекс массива [0]');
  } else if (multinumbers[1].length > 3) {alert('Индекс массива [1]')
    } else if (multinumbers[2].length > 3) {alert('Индекс массива [2]')
      } else {alert('Какая-то ошибка: все массивы слишком короткие!')};
}
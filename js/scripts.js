// IMPERATIVA
const numbers = [1, 2, 3, 4, 5, 6];
const letters = ['a', 'b', 'C', 'd'];

// for (const number of numbers) {
//   console.log(number);
// }

// DECLARATIVA
// numbers.forEach(number => {
//   console.log('NUMBER', number);
// });

// const lettersUpper = [];

// letters.forEach(letter => {
//   lettersUpper.push(letter.toUpperCase());
// });

// map SIEMPRE genera un nuevo array y tenemos que guardarlo en una constante

// const lettersUpper = letters.map(letter => letter.toUpperCase());
// const numbersDouble = numbers.map(number => number * 2);

// console.log(lettersUpper);
// console.log(numbersDouble);

// filter
// const onlyEven = [];
// const onlyOdd = [];
// for (const number of numbers) {
//   if (number % 2 === 0) {
//     onlyEven.push(number);
//   }else{
//     onlyOdd.push(number);
//   }
// }

// const onlyEven = numbers.filter(number => number % 2 === 0);
// const onlyOdd = numbers.filter(number => number % 2 !== 0);

// console.log(onlyEven);
// console.log(onlyOdd);

// EVERY - SOME
// const allNumbersAreGreaterThan4 = numbers.every(number => number < 5);
// const allLettersAreInUppercase = letters.every(letter => letter === letter.toUpperCase());

// console.log(allNumbersAreGreaterThan4);

// const anyNumbersAreGreaterThan4 = numbers.some(number => number < 5);
// const anyLettersAreInUppercase = letters.some(letter => letter === letter.toUpperCase());

// console.log(anyNumbersAreGreaterThan4);
// console.log(anyLettersAreInUppercase);

const users = [
  {
    id: 1,
    name: 'Macarena'
  },
  {
    id: 2,
    name: 'Xavi'
  },
  {
    id: 3,
    name: 'Diego'
  },
  {
    id: 4,
    name: 'Josefa'
  }
];

// FIND
// const userFound = users.find(user => user.id === 2);

// console.log(userFound);

// SORT

const numbers2 = [8, 4, 5, 1];

/* 
  4 - 8 -> negativo [4, 8, 5, 1]
  5 - 8 -> negativo [4, 5, 8, 1]
  1 - 8 -> negativo [4, 5, 1, 8]
  5 - 4 -> positivo [4, 5, 1, 8]
  1 - 5 -> negativo [4, 1, 5, 8]
  5 - 4 -> positivo [4, 1, 5, 8]
  1 - 4 -> negativo [1, 4, 5, 8]

  menor a mayor a - b
  mayor a menor b - a

*/

// numbers2.sort((a, b) => b - a);

// console.log(numbers2);

// const names = ['Josefa', 'macarena', 'xavi', 'diego', 'Victor', 'árbol', 'Árbola'];

// names.sort((a, b) => b.localeCompare(a));

// console.log(names);

// REDUCE

// let total = 0;

// for (const number of numbers2) {
//   total = total + number;
// }

// const total = numbers2.reduce((valorAcumulado, number) => {
//   console.log(valorAcumulado);
//   return valorAcumulado + number;
// });

// console.log(total);

const wordArray = 'Macarena y Xavier';

const newWord = wordArray.split('').reduce((acc, letter) => {
  if (letter === ' ') {
    return acc + '-';
  }

  if (letter === 'a') {
    return acc + 8;
  }

  return acc + letter;
});

console.log(newWord);

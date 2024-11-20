// IMPERATIVA

const letters = ['A', 'B', 'C', 'D'];

// for (const number of numbers) {
//   console.log(double);
// }

// DECLARATIVA
// Callback, son funciones que son ejecutadas por otra función

// numbers.forEach((number, index) => {
//   console.log('NUMBER - ', number);
//   console.log('INDEX - ', index);
// });

// LO QUE PASA POR DETRÁS
// for (let i = 0; i < letters.length; i++){
//   const letter = letters[i]
//   const index = i
// }

// const lettersLower = letters.map(letter => {
//   return letter.toLowerCase();
// });

// console.log(lettersLower);

// const onlyEven2 = [];

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     onlyEven2.push(number);
//   }
// }

// const onlyEven = numbers.filter(number => {
//   return number % 2 === 0;
// });

// let higherThan4 = true;
// for (const number of numbers) {
//   if (number < 4) {
//     higherThan4 = false;
//   }
// }

// const allNumbersArehigherThan4 = numbers.every(number => number > 4);
// console.log(allNumbersArehigherThan4);

// const anyNumberArehigherThan4 = numbers.some(number => number > 4);

// console.log(anyNumberArehigherThan4);

const usersObject = [
  {
    id: 1,
    name: 'Patri'
  },
  {
    id: 2,
    name: 'Amanda'
  },
  {
    id: 3,
    name: 'Juan'
  }
];

// const foundedUser = users.find(user => user.id === 4);

// console.log(foundedUser);

// const foundedUserIndex = users.findIndex(user => user.id === 1);

// console.log(foundedUserIndex);

const numbers = [2, 4, 3, 8, 8, 1, 7];

// 2 - 4 = +
// 4 - 3 = -

// NUMEROS
numbers.sort((a, b) => b - a); // mayor a menor
console.log(numbers);

numbers.sort((a, b) => a - b); // menor a mayor

console.log(numbers);

/* 
  positivo
  negativo
  0
*/

// const users = ['Juan', 'patri', 'amanda', 'Adrián', 'árbol'];

// users.sort((a, b) => a.localeCompare(b));

// console.log(users);

// let total = 0;

// for (const number of numbers) {
//   total += number;
// }

// console.log(total);

const total = numbers.reduce((acc, number) => number + acc);
console.log(total);

const wordToReduce = 'Ordenador';
console.log(wordToReduce.split(''));

const word = wordToReduce.split('').reduce((acc, letter) => acc + letter.toUpperCase());
console.log(word);

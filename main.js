//doc

// const str = 'Hello world!!!';
// console.log(str.length);
// console.log(str.includes('Hello', 0));
// console.log(str.indexOf('world'));
// console.log(str.padEnd(10, '0'));

//replace

// const str = 'Hello, Hello?!';
// console.log(str.replace('Hello', 'Hi'));
// console.log(str.replace(/Hello/g, 'Hi'));

//slice

// const str = 'Hello world';

// console.log(str.slice(0, 5));
// console.log(str.slice(6, -1));
// console.log(str.slice(6));

//split()

// const str = 'apple, banana, orange';
// console.log(str.split(','));

//toLowerCase()

// const str = '    Apple, Banana, Orange   ';

// console.log(str.toLocaleLowerCase());
// console.log(str.toLocaleUpperCase());
// console.log(str.trim());

//toFixed()

// const num = 31415926335;
// console.log(typeof num.toFixed(2));
// console.log(typeof parseFloat(num.toFixed(2)));
// console.log(num.toLocaleString());

//math.abs
// console.log(Math.abs(-2));
// console.log(Math.ceil(3.142));
// console.log(Math.floor(3.142));
// console.log(Math.max(1, 22, 444, 555));
// console.log(Math.pow(4, 2));
// console.log(Math.random());
// function random(min = 0, max = 10) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// console.log(random());
// console.log(Math.round(3.5));

//Date

const date4 = new Date();
console.log(date4);

const d2 = new Date(2022, 11, 16, 12, 56, 31);
console.log(d2);
console.log(d2.getFullYear());
const d3 = new Date();
d3.setFullYear(2023);
console.log(d3);

const date5 = new Date();
const day1 = date5.getDay();
console.log(day1);
console.log(getDayKo(day1));
function getDayKo(day) {
  switch (day) {
    case 0:
      return 'sun';
    case 1:
      return 'mon';
    case 2:
      return 'twe';
    case 3:
      return 'wen';
    case 4:
      return 'thr';
    case 5:
      return 'fri';
    case 6:
      return 'say';
  }
}

//array

const arr1 = ['a', 'b', 'c'];
console.log(arr1.length);
console.log(arr1[0]);
console.log(arr1.at(0));
console.log(arr1.at(-1));
const arr2 = ['d', 'e', 'f'];
const arr3 = arr1.concat(arr2);
console.log(arr3);

const users1 = [
  { name: 'neo', age: 40 },
  { name: 'meo', age: 60 },
  { name: 'reo', age: 55 },
];
const adults = users1.filter((user1) => user1.age > 45);
console.log(adults);
const arr4 = [5, 8, 130, 12, 44];
const foundItem = arr4.find((arr4) => arr4 > 10);
console.log(foundItem);

arr1.forEach((item) => console.log(item));
for (let i = 0; i < arr1.length; i += 1) {
  console.log(arr1[i]);
}

const arr5 = ['apple', 'banana', 'orange'];
const newLength = arr5.push('lemon');
console.log(arr5.join(','));
console.log(arr5.join(', '));
console.log(arr5.join('/'));

const numbers = [1, 100, 6, 44];
const newNumbers = numbers.map((item) => item * 2);
console.log(newNumbers);
console.log(numbers.pop());
console.log(numbers);

numbers.sort();
numbers.sort((a, b) => a - b);
console.log(numbers);
console.log(numbers.reverse());

arr1.splice(2, 0, 'x');
console.log(arr1);

//object.assgin()

const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };
const result = Object.assign({}, target, source1, source2);
console.log(target);
console.log(result);

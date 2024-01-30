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
console.log(Math.abs(-2));
console.log(Math.ceil(3.142));
console.log(Math.floor(3.142));
console.log(Math.max(1, 22, 444, 555));
console.log(Math.pow(4, 2));
console.log(Math.random());
function random(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(random());
console.log(Math.round(3.5));

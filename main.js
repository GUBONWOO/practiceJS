function hello() {
  return 'hello';
}

console.log(hello);

function plus(num) {
  if (typeof num !== 'number') {
    console.log('check num');
    return 0;
  }
  return num + 1;
}
console.log(plus(2));
console.log(plus(7));

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 2));

const user = {
  name: 'koo',
  age: 20,
  email: 'acacac@naver.com',
};

function getName({ name }) {
  return name;
}
function getEmail({ email }) {
  return email;
}

console.log(getName(user));
console.log(getEmail(user));

const fruits = ['apple', 'banana', 'orange'];
const numbers = [1, 2, 3, 4, 5, 6, 7];

function getSecondItem(array) {
  return array[1];
}
console.log(getSecondItem(fruits));
console.log(getSecondItem(numbers));

function sum(...rest) {
  console.log(rest);
  console.log(arguments);
  return rest.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
}
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 7, 8, 9));

function add1(a, b) {
  return a + b;
}
const add2 = (a, b) => a + b;
console.log(add1(1, 2));

const a = () => {};
const b = (x) => {};
const c = (x, y) => {};
const d = (x) => {
  return x * x;
};
const e = (x) => x * x;
const f = (x) => {
  console.log(x * x);
  return x * x;
};

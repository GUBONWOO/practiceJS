const string1 = 'Hello';
const string2 = 'Hello';
const string3 = `Hello ${string1} ?!`;

console.log(string3);

const fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits.length);
console.log(fruits[0]);

// const user = new Object()
// user.name = 'Heropy'
// user.age = 85
// console.log(user);

// function User() {
//   this.name = 'Koo'
//   this.age = 31
// }
// const user = new User()

const userA = {
  name: 'koo',
  age: 70,
};
const key = 'name';
console.log(userA.name);

const userB = {
  name: 'koo2',
  age: 40,
  parent: userA,
};

console.log(userB.parent);

const y = function () {
  console.log('A');
};
const x = function (z) {
  console.log(z);
};
b(y);

console.log(typeof 'Hello' === 'string');
console.log(typeof 123 === 'number');
console.log(typeof false === 'boolean');
console.log(typeof undefined === 'undefined');
console.log(typeof null === 'object');
console.log(typeof function () {} === 'function');

console.log([].constructor === Array);
console.log([].constructor === Object);

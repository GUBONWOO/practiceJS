// import cloneDeep from './node_modules/lodash/cloneDeep';

// // Symbol

// const sKey = Symbol('Hello!');
// const user = {
//   key: 'Normal Info',
//   [sKey]: 'Important Info',
// };

// console.log(user.key);
// console.log(user['key']);
// console.log(user[sKey]);
// console.log(sKey);

// // BigInt

// console.log(123123123);
// console.log(123123123n);
// console.log(BigInt('123123123'));

// let e = 11n;
// let f = 22;

// console.log(e + BigInt(f));
// console.log(typeof (e + BigInt(f)));

// // Shallow Copy

// let a = 1;
// let b = a;

// b = 2;
// console.log(b);
// console.log(a);

// b = 3;
// console.log(b);
// console.log(a);

// const c = { x: 1 };
// const d = Object.assign({}, c);
// c.x = 2;

// console.log(c);
// console.log(d);

// const z = { x: { y: 1 } };
// const v = cloneDeep(z);
// v.x.y = 2;
// console.log(z);
// console.log(v);

// GC

// let a = { x: 1 };
// let b = a;
// b.x = 2;
// console.log(b);
// console.log(a);

// const user = {
//   name: 'koo',
//   age: 20,
//   emails: ['zcwdcdad@gmail.com', 'heroyp@gmail.com'],
// };

// delete user.emails;
// console.log(user);

// Closure

// function createCount() {
//   let a = 0;
//   return function () {
//     return (a += 1);
//   };
// }
// const count = createCount();
// console.log(count());
// console.log(count());
// console.log(count());

// const h1El = document.querySelector('h1');
// const h2El = document.querySelector('h2');

// let h1IsRed = false;
// let h2IsRed = false;

// h1El.addEventListener('click', (event) => {
//   h1IsRed = !h1IsRed;
//   h1El.style.color = h1IsRed ? ' red' : 'black';
// });

// Call Stack Task Queue
// import { createStacks} from
createStacks({
  stacks: [],
  queues: [],
});
setTimeout(() => {
  console.log(1);
}, 0);
console.log(2);

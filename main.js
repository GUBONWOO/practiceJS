//prototype
// const fruits = new Array('apple', 'banana', orange);

// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits.includes('banana'));

// Array.prototype.heropy = function () {
//   console.log(this);
// };
// fruits.heropy();

// const korean = {
//   firstName: 'minsoo',
//   lastName: 'kim',
//   getFullname() {
//     return `${this.firstName}${this.lastName}`;
//   },
// };
// console.log(korean.getFullname());

// function User2(first, last) {
//   (this.firstName = first), (this.lastName = last);
// }

// const heropy = new User('heropy', 'park');

// console.log(heropy);

// class
// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }

// class User {
//   constructor(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//   }
//   getFullName() {
//     `${this.firstName}${this.lastName}`;
//   }
// }
// const china1 = new User('zhi', 'yang');
// const china2 = new User('lao', 'zhang');

// console.log(china1);
// console.log(china2);

//Getter, Setter

// class User {
//   constructor(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//   }
//   get fullName() {
//     return `${this.firstName}${this.lastName}`;
//   }
//   set fullName(value) {
//     console.log(value);
//     [this.firstName, this.lastName] = value.split(' ');
//   }
// }

// const china1 = new User('zhi', 'yang');

// console.log(china1.fullName);
// china1.fullName = 'neo Anderson';
// console.log(china1);

//static methods

// class User {
//   constructor(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   static isUser(user) {
//     if (user.firstName && user.lastName) {
//       return true;
//     }
//     return false;
//   }
// }
// const china1 = new User('zhi', 'yang');

// console.log(china1);
// console.log(china1.getFullName());
// console.log(User.isUser(china1));

//instanceof constructor
class A {
  constructor() {}
}
class B extends A {
  constructor() {
    super();
  }
}

class C extends B {
  constructor() {
    super();
  }
}

const a = new A();
const b = new B();
const c = new C();

console.log(a instanceof A);
console.log(a instanceof B);
console.log(b instanceof A);

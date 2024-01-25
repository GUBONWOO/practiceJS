// Optional chaning

const userA = {
  name: 'koo',
  age: 90,
  address: {
    country: 'korea',
    city: 'busan',
  },
};

const userB = {
  name: 'neno',
  age: 22,
};

function getCity(user) {
  return user.address.city || 'no adress';
}
console.log(getCity(userA));
console.log(getCity(userB));

// if

function isPositive(num) {
  if (num > 0) {
    return 'yang';
  } else if (num < 0) {
    return 'um';
  } else {
    return '0';
  }
}
console.log(isPositive(1));
console.log(isPositive(10));
console.log(isPositive(-2));
console.log(isPositive(0));

// switch
function price(fruit) {
  switch (fruit) {
    case 'apple':
      return 1000;

    case 'banana':
      return 200;

    default:
      return 0;
  }
}
console.log(price(apple));
console.log(price(banana));
console.log(price(hi));

// for

for (let i = 0; i < 10; i += 1) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// for of

const fruits = ['apple', 'banana', 'orange'];

for (const fruit of fruits) {
  console.log(fruit);
}
//  for in

const userX = {
  name: 'koo',
  age: 31,
  isvalid: true,
};

for (const key in userX) {
  console.log(key);
  console.log(userX['age']);
}

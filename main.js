//dom

// const element = document.querySelector('h1');
// console.log(element.textContent);

// const parent = document.querySelector('.parent');

// console.log(parent.childNodes);

// console.log(parent.children);
// console.log(parent);

const el = document.getElementById('child2');
console.log(el);

const el1 = document.querySelector('.child:first-child');
console.log(el1);

const nodeList = document.querySelectorAll('.child');
console.log(nodeList);
nodeList.forEach((el3) => console.log(el3.textContent));

const el4 = document.querySelector('.child');
console.log(el.parentElement);
console.log(el4.closest('div'));
console.log(el4.closest('body'));
console.log(el4.closest('.hello'));

//dom

// const element = document.querySelector('h1');
// console.log(element.textContent);

// const parent = document.querySelector('.parent');

// console.log(parent.childNodes);

// console.log(parent.children);
// console.log(parent);

// const el = document.getElementById('child2');
// console.log(el);

// const el1 = document.querySelector('.child:first-child');
// console.log(el1);

// const nodeList = document.querySelectorAll('.child');
// console.log(nodeList);
// nodeList.forEach((el3) => console.log(el3.textContent));

// const el4 = document.querySelector('.child');
// console.log(el.parentElement);
// console.log(el4.closest('div'));
// console.log(el4.closest('body'));
// console.log(el4.closest('.hello'));

// const divEl = document.createElement('div');
// console.log(divEl);
// const inputEl = document.createElement('input');
// console.log(inputEl);

// const parentEl = document.querySelector('.parent');

// const el = document.createElement('div');
// el.textContent = 'Hello';

// parentEl.prepend(new Comment('zoo'));
// parentEl.append(el, 'Text!');

// const el = document.querySelector('.child');
// el.remove();

//E.dataset

const el = document.querySelector('.child');
const str = 'Hello';
const obj = { a: 1, b: 2 };

el.dataset.helloWorld = str;
el.dataset.object = JSON.stringify(obj);
console.log(el.dataset.helloWorld);
console.log(el.dataset.object);
console.log(JSON.parse(el.dataset.object));

console.log(window.scrollX, window.scrollY);

setTimeout(() => {
  window.scrollTo(0, 500);
}, 1000);

//addEventListener()

// const parentEL = document.querySelector('.parent');
// const childEl = document.querySelector('.child');

// const handler = () => {
//   console.log('Parent!');
// };

// parentEL.addEventListener('click', () => {
//   console.log('Parent');
// });
// childEl.addEventListener('click', () => {
//   console.log('Child');
// });

// const parentEL = document.querySelector('.parent');
// parentEL.addEventListener('click', (event) => {
//   console.log(event.target, event.currentTarget);
// });
// parentEL.addEventListener('wheel', (event) => {
//   console.log(event);
// });
// const inputEl = document.querySelector('input');
// inputEl.addEventListener('keydown', (event) => {
//   console.log(event.key);
// });

//가본 동작방지
// const parentEL = document.querySelector('.parent');

// parentEL.addEventListener('wheel', (event) => {
//   event.preventDefault();
//   console.log('Wheel!');
// });

// const anchorEl = document.querySelector('a');
// anchorEl.addEventListener('click', (event) => {
//   event.preventDefault();
// });

const parentEl = document.querySelector('.parent');
const childEl = document.querySelector('.child');
const anchorEl = document.querySelector('a');

window.addEventListener('click', (event) => {
  console.log('Window');
});
document.body.addEventListener('click', (event) => {
  console.log('Body');
});
parentEl.addEventListener('click', (event) => {
  console.log('Parent');
  event.stopPropagation();
});
childEl.addEventListener(
  'click',
  (event) => {
    console.log('Child');
  },
  { once: true }
);

anchorEl.addEventListener('click', (event) => {
  console.log('Anchor');
});

const inputEl1 = document.querySelector('input');
inputEl1.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    console.log(event.isComposing);
    console.log(event.target.value);
  }
});

const formEl = document.querySelector('form');
const inputEls = document.querySelectorAll('input');

inputEls.forEach((el) => {
  el.addEventListener('focus', () => {
    formEl.classList.add('active');
  });
  el.addEventListener('blur', () => {
    formEl.classList.remove('active');
  });
  el.addEventListener('change', (event) => {
    console.log(event.target.value);
  });
});

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    id: event.target[0].value,
    pw: event.target[1].value,
  };
  console.log('제출', data);
});

formEl.addEventListener('reset', (event) => {
  console.log('reset');
});

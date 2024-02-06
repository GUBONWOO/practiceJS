//Cookie

document.cookie = 'a=1; max-age=3 ';
document.cookie = 'b=2';
console.log(document.cookie);

//Storage

localStorage.setItem('a', 'hello');
localStorage.setItem('b', { x: 1, y: 2 });
localStorage.setItem('c', JSON.stringify(123));

console.log(localStorage.getItem('a'));
console.log(localStorage.getItem('b'));
console.log(JSON.parse(localStorage.getItem('c')));

// Location

console.log(location);

// History

console.log(history);

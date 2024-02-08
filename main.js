// RegExp

const str = `
010-8818-1111
tladkadk@gmail.com
HelloWorld
aasdadadadasdsaddacatNdog
베트남음식마시따
`;
const regexp = new RegExp('tl', 'gi');
console.log(str.match(regexp));
console.log(regexp.test(str));
console.log(str.replace(regexp, 'cat'));
console.log(str.match(/the/));
console.log(str.match(/the/g));
console.log(str.match(/the/gi));
console.log(str.match(/\.$/gim));

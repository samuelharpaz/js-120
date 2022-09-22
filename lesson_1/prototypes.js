// const a = {
//   eats: true
// }

// const b = Object.create(a);

// // console.log(b.isPrototypeOf(a));
// console.log(Object.getPrototypeOf(a));

const obj = Object.create(null);

obj.greeting = 'hi!';

const b = Object.create(obj);

console.log(b.greeting);

console.log(Object.getPrototypeOf(obj));
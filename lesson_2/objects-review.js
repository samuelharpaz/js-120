// const source = {
//   a: 1,
//   b: 2
// };

// const obj = {};
// Object.setPrototypeOf(obj, source);

// obj[false] = 25;
// obj[['a', 'b', 'c']] = 43;

// Object.defineProperty(obj, 'false', {
//   enumerable: false
// })

// console.log(Object.keys(obj));
// console.log(obj['a,b,c']);

// console.log(obj.a);

// console.log('a' in obj);
// console.log(obj.hasOwnProperty('hasOwnProperty'));

// console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.keys(obj));

// for (let key in obj) {
//   console.log(key);
// }

// const protoFarm = {
//   landSize: '25 acres'
// };

// const farm = {
//   chickens: 3,
//   cows: 17,
//   goats: 140,
//   getDescrip() {
//     return `This farm has ${this.goats} goats!`;
//   }
// };

// Object.setPrototypeOf(farm, protoFarm);

// Object.defineProperty(farm, 'goats', {
//   enumerable: false
// });

// console.log(farm.landSize);

// console.log(Object.keys(farm));
// console.log(Object.getOwnPropertyNames(farm));

// // for (let prop in farm) {
// //   console.log(prop);
// // }

// console.log('goats' in farm);
// console.log(farm.hasOwnProperty('goats'));

// Object.keys ignores 1) non-enumerable properties AND 2) inherited properties
// Object.getOwnPropertyNames includes non-enumerable properties, but ignores inherited properties

// const harry = {};
// harry[true] = 'wizard';

// console.log(Object.keys(harry));

// function logNum() {
//   console.log(this.num);
// }

// logNum();


// function func() {
//   return this;
// }

// let context = func();

// console.log(context);

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = {
//    a: 'abc',
//    b: 'def',
//    add: function() {
//      return this.a + this.b;
//    },
// };

// console.log(bar.add.call(foo));

// (function sum(number1, number2) {
//   return number1 + number2;
// });

// console.log(sum(3, 4));
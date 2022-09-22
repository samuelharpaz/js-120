// 'use strict'

// function func() {
//   return this;
// }

// let context = func();

// console.log(context);

// let bar = {
//   a: 'abc',
//   b: 'def',
//   add: function() {
//     return this.a + this.b;
//   },
// };

// console.log(bar.add());

// let greetings = {
//   morning: 'Good morning, ',
//   afternoon: 'Good afternoon, ',
//   evening: 'Good evening, ',

//   greeting: function(name) {
//     let currentHour = (new Date()).getHours();

//     if (currentHour < 12) {
//       console.log(this.morning + name);
//     } else if (currentHour < 18) {
//       console.log(this.afternoon + name);
//     } else {
//       console.log(this.evening + name);
//     }
//   }
// };

// let spanishWords = {
//   morning: 'Buenos dias, ',
//   afternoon: 'Buenas tardes, ',
//   evening: 'Buenas noches, '
// };

// let spanishGreeter = greetings.greeting.bind(spanishWords, 'Guillermo');

// console.log(spanishGreeter('Jose'));
// console.log(spanishGreeter('Juan'));

// 'use strict'

// let obj = {
//   a: 'Amazebulous!',
// };
// let otherObj = {
//   a: "That's not a real word!",
// };

// function foo() {
//   console.log(this.a);
// }

// let bar = foo.bind(obj);

// // foo();


// bar.call(otherObj);

// nickname = 'Hairy Potter';

// let harry = {  
//   isWizard: true,
//   firstName: this.nickname
// }

// console.log(harry);

// 'use strict';

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

// function logReturnVal(func, thisArg) {
//   let returnVal = func.call(thisArg);
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription, turk);

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription.bind(turk));

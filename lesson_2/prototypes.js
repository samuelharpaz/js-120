function createCar(make, model, year) {
  return {
    make,             // Same as "make: make"
    model,            // Same as "model: model"
    year,             // Same as "year: year"
    started: false,

    start() {         // Same as "start: function() {"
      this.started = true;
    },

    stop() {          // Same as "stop: function() {"
      this.started = false;
    },
  };
}

const car1 = createCar('Honda', 'Accord', 2012);
const car2 = createCar('Toyota', 'Camry', 2017);

// car1.start();
// console.log(car1.started);
// console.log(car2.started);
// car2.start();
// console.log(car2.started);

// car1.stop();
// console.log(car1.started);

// let a = {
//   foo: 1,
//   bar: 2,
// };

// const source = {
//   greeting: 'hi',
//   eats: true
// };

// a.__proto__ = null;

// console.log(a.hasOwnProperty('foo'));

// console.log(Object.getPrototypeOf(a));

// console.log(a.eats);

// let b = Object.create(a);

// console.log(a.isPrototypeOf(b));
// console.log(Object.prototype.isPrototypeOf(b));

// console.log(b.greeting);

// console.log(a.toString());

// console.log(a.hasOwnProperty('foo')); // => true
// console.log(b.hasOwnProperty('foo')); // => false

// console.log(Object.keys(a));
// console.log(Object.keys(b));

// console.log(Object.getPrototypeOf(a) === Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype));


// const arr = [1, 2, 3];

// console.log(arr.propertyIsEnumerable('0'));
// console.log(arr.hasOwnProperty('hasOwnProperty'));

// console.log(Object.getOwnPropertyNames(Array.prototype));

// console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(Object)));
// console.log(Object.getPrototypeOf(Function) === Function.prototype);


// const person = {
//   isHuman: false,
//   greeting: 'Hello',
//   printIntroduction: function() {
//     console.log(`${this.greeting}, My name is ${this.name}. Am I human? ${this.isHuman}`);
//   }
// };

// const me = Object.create(person);

// me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
// me.isHuman = true; // inherited properties can be overwritten
// me.greeting = 'Hi'

// me.printIntroduction();
// // expected output: "My name is Matthew. Am I human? true"


// Shape - superclass
// function Shape() {
//   this.x = 0;
//   this.y = 0;
// }

// // superclass method
// Shape.prototype.move = function(x, y) {
//   this.x += x;
//   this.y += y;
//   console.info('Shape moved.');
// };

// // Rectangle - subclass
// function Rectangle() {
//   console.log(this);
//   Shape() // call super constructor.
// }

// const rectangle1 = new Rectangle();

// // // subclass extends superclass
// Rectangle.prototype = Object.create(Shape.prototype);

// console.log(rectangle1.x);
// //If you don't set Rectangle.prototype.constructor to Rectangle,
// //it will take the prototype.constructor of Shape (parent).
// //To avoid that, we set the prototype.constructor to Rectangle (child).
// Rectangle.prototype.constructor = Rectangle;

// const rect = new Rectangle();

// console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
// console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
// rect.move(1, 1); // Outputs, 'Shape moved.'

// console.log(rect);
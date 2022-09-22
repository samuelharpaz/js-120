let cat = {
  name: 'Fluffy',

  makeNoise() {
    console.log('Meow! Meow!');
  },

  eat() {
    // implementation
  }
};

let dog = {
  name: 'Maxi',

  makeNoise() {
    console.log('Woof! Woof!');
  },

  eat() {
    // implementation
  }
};

let pete = {
  name: 'Pete',
  pets: [cat, dog]
};

// pete.pets.push(cat);
// pete.pets.push(dog);

console.log(pete);

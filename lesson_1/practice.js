let cat = {
  name: 'Fluffy',

  makeNoise() {
    console.log('Meow! Meow!');
  },

  eat() {
    // implementation
  },
};

let pete = {
  name: 'Pete',
  pet: cat,

  printName() {
    console.log(`My name is ${this.name}!`);
    console.log(`My pet's name is ${this.pet.name}`);
  },

  changePetName() {
    this.pet.name = 'Charlie';
  }
};

// console.log(pete.pet.name);
pete.changePetName();
// console.log(pete.pet.name);
console.log(cat);
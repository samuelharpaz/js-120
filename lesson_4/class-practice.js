class Greeting {
  greet(msg) {
    console.log(msg);
  }
}

class Hello extends Greeting {
  hi() {
    this.greet('Hello');
  }
}

class Goodbye extends Greeting {
  bye() {
    this.greet('Goodbye');   
  }
}

const hello1 = new Hello();
hello1.hi();
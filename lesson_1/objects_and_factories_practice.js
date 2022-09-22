// const book1 = {
//   title: 'Mythos',
//   author: 'Stephen Fry',
//   getDescription() {
//     return `${this.title} was written by ${this.author}.`
//   }
// };

// const book2 = {
//   title: 'Me Talk Pretty One Day',
//   author: 'David Sedaris',
//   getDescription() {
//     return `${this.title} was written by ${this.author}.`
//   }
// };

// const book3 = {
//   title: "Aunts aren't Gentlemen",
//   author: 'PG Wodehouse',
//   getDescription() {
//     return `${this.title} was written by ${this.author}.`
//   }
// };

function createBook(title, author) {
  return {
    title,
    author,
    read: false,
    getDescription() {

      return `${this.title} was written by ${this.author}. I ${this.read ? 'have' : "haven't"} read it.`;
    },
    readBook() {
      this.read = true;
    }
  };
}


let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

console.log(book1.getDescription());  // "Mythos was written by Stephen Fry."
console.log(book2.getDescription());  // "Me Talk Pretty One Day was written by David Sedaris."
console.log(book3.getDescription());  // "Aunts aren't Gentlemen was written by PG Wodehouse"

console.log(book1.read);
console.log(book2.read);
console.log(book3.read);

book1.readBook();
console.log(book1.read);
console.log(book1.getDescription());  // "Mythos was written by Stephen Fry."


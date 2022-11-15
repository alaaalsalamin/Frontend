class book {
  constructor(author) {
    this.author = author;
  }

  set writer(author) {
    this.author = author;
  }
  get writer() {
    return this.author;
  }
}
const book1 = new book("hussam");
console.log(book1);
console.log(book1.author);




// promise
const promise = new Promise((resolve, reject) => {

});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(123);
  });
function forLoop1() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}
forLoop1();
forLoop1();
forLoop1();

//object format
const book = {
  title: "1984",
  author: "George OrWell",
  isAvailable: false
}

//转换为JSON
const bookJSON = JSON.stringify(book);
console.log(typeof bookJSON);
console.log(bookJSON);


console.log("---------------------");

const bookObj = JSON.parse(bookJSON);
console.log(typeof bookObj);
console.log(bookObj);
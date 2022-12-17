let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.showInfo = function() {
    return (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read)
}

function addBookToLibrary(book) {
    myLibrary.push(book)
} 

const book1 = new Book("The Hobbit", "Author", "356", "yes")
addBookToLibrary(book1)

const book2 = new Book("Hunger Games", "Author 2", "297", "no")
addBookToLibrary(book2)

console.log(book1.showInfo())
console.log(book2.showInfo())
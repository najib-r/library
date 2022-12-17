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

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
} 

addBookToLibrary("The Hobbit", "Author", "356", "yes")
console.log(myLibrary[0].showInfo)
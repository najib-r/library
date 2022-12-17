let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.showInfo = function() {
    return (title + " by " + author + ", " + pages + " pages, " + read)
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read)
} 

addBookToLibrary("The Hobbit", "Author", "356", "yes")
console.log(myLibrary)
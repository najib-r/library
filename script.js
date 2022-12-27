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

const modal = document.getElementById('myModal')
const newBookBtn = document.getElementById('newBtn')
const cancelBtn = document.getElementById('cancelBtn')
const submitBtn = document.getElementById('submitBtn')

newBookBtn.addEventListener('click', () => modal.style.display = 'block')
cancelBtn.addEventListener('click', () => modal.style.display = 'none')

submitBtn.addEventListener('click', function(event) {
    event.preventDefault()
});

submitBtn.addEventListener('click', validateForm)

function validateForm() {
    const title = document.getElementById('b-title')
    const author = document.getElementById('b-author')
    const pages = document.getElementById('b-pages')
    const read = document.getElementById('b-read')

    // Validate all inputs...

    const book = new Book(title.value, author.value, pages.value, read.value)
    addBookToLibrary(book)
    showBooks()
}

const book1 = new Book("The Hobbit", "Author", "356", "yes")
addBookToLibrary(book1)

const book2 = new Book("Hunger Games", "Author 2", "297", "no")
addBookToLibrary(book2)

const book3 = new Book("Hunger Games II", "Author 2", "332", "no")
addBookToLibrary(book3)


function showBooks() {
    const main = document.querySelector('.main')
    // clear main
    main.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        var newElement = document.createElement('div');
        newElement.className = "card";
        newElement.innerHTML = myLibrary[i].showInfo();
        main.appendChild(newElement);
    }
}

showBooks()

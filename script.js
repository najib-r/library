let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.showInfo = function() {
    return (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read);
}

Book.prototype.toggleRead = function() {
    if (this.read === "yes") {
        this.read = "no";
    } else {
        this.read = "yes";
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
} 

const modal = document.getElementById('myModal');
const newBookBtn = document.getElementById('newBtn');
const cancelBtn = document.getElementById('cancelBtn');
const submitBtn = document.getElementById('submitBtn');

newBookBtn.addEventListener('click', () => modal.style.display = 'block');
cancelBtn.addEventListener('click', () => modal.style.display = 'none');


submitBtn.addEventListener('click', function validateForm(event) {

    event.preventDefault();
    const title = document.getElementById('b-title');
    const author = document.getElementById('b-author');
    const pages = document.getElementById('b-pages');
    let read = document.getElementById('b-read');
    const inputs = document.querySelectorAll("input");

     // Validate all inputs...

    if (read.checked) {
        read = "yes";
    } 
    else {
        read = "no";
    }
    const book = new Book(title.value, author.value, pages.value, read);
    addBookToLibrary(book);
    showBooks();
    modal.style.display = 'none';

    // clear inputs
    inputs.forEach(input => {
        input.value = '';
    });
});


const book1 = new Book("The Hobbit", "Author", "356", "yes");
addBookToLibrary(book1);

const book2 = new Book("Hunger Games", "Author 2", "297", "no");
addBookToLibrary(book2);

const book3 = new Book("Hunger Games II", "Author 2", "332", "no");
addBookToLibrary(book3);


function showBooks() {
    const main = document.querySelector('.main');
    // clear main
    main.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        var newElement = document.createElement('div');
        newElement.className = "card";
        newElement.dataset.index = i;
        newElement.innerHTML = myLibrary[i].showInfo();
        const buttons = document.createElement('div');
        buttons.className = "buttons";
        const button = document.createElement('button');
        button.className = "removeBtn";
        button.dataset.index = i;
        button.textContent = "Remove Book";
        button.addEventListener('click', () => {
            myLibrary.splice(button.dataset.index, 1);
            showBooks();
        });
        buttons.appendChild(button);
        const button2 = document.createElement('button');
        button.className = "readBtn";
        button2.dataset.index = i;
        button2.textContent = "Toggle Read";
        button2.addEventListener('click', () => {
            myLibrary[button2.dataset.index].toggleRead();
            showBooks();
        });
        buttons.appendChild(button2);
        newElement.appendChild(buttons);
        main.appendChild(newElement);
    }
}

showBooks();

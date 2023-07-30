let myLibrary = [];

function Book(title, author, pages, read, color) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.color = color;
}

Book.prototype.showInfo = function() {
    return (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read);
}

Book.prototype.toggleRead = function() {
    if (this.read === "already read") {
        this.read = "not read";
    } else {
        this.read = "already read";
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
} 

function generateRandomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return bgColor = "rgb(" + x + "," + y + "," + z + ")";
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
        read = "already read";
    } 
    else {
        read = "not read";
    }
    const book = new Book(title.value, author.value, pages.value, read, generateRandomColor());
    addBookToLibrary(book);
    showBooks();
    modal.style.display = 'none';

    // clear inputs
    inputs.forEach(input => {
        input.value = '';
    });

    // disable submit button
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.setAttribute('disabled', true);

});



function showBooks() {
    const main = document.querySelector('.main');
    // clear main
    main.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        var newElement = document.createElement('div');
        newElement.className = "card";
        newElement.style.backgroundColor = myLibrary[i].color;
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


function disableField() {
    const invalidForm = document.querySelector('form:invalid');
    const submitBtn = document.getElementById('submitBtn');
    if (invalidForm) {
      submitBtn.setAttribute('disabled', true);
    } else {
      submitBtn.disabled = false;
    }
  }

const inputs = document.getElementsByTagName("input");
for (let input of inputs) {
    input.addEventListener('input', disableField);
}
  
disableField();
  
  
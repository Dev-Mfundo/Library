const form = document.getElementById("form");
const newBook = document.getElementById("newBook");
const cancelBtn = document.getElementById("cancelBtn");
const checkboxYes = document.getElementById("checkYes");
const checkboxNo = document.getElementById("checkNo");
const bookDisplay = document.getElementById("bookDisplay");

let myLibrary = [];

newBook.addEventListener("click", ()=>{
    if((form.style.display) == 'block'){
        form.style.display = 'none';
    } else {
        form.style.display = 'block';
    }
});

cancelBtn.addEventListener("click", () => {
    form.style.display = 'none';
});

checkboxYes.addEventListener("change", ()=>{
    if (checkboxYes.checked == true) {
        checkboxNo.checked = false;
    }
});

checkboxNo.addEventListener("change", ()=>{
    if (checkboxNo.checked == true) {
        checkboxYes.checked = false;
    }
});

function Book(author, title, pages, readBook) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = readBook;
}

Book.prototype.toggleReadStatus = function() {
    this.read = this.read === "Read" ? "Not yet!" : "Read";
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    bookDisplay.innerHTML = ""; 
    myLibrary.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Title:</strong> ${book.title}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Status:</strong> ${book.read}</p>
            <button class="toggleReadStatus" data-index="${index}">Change Read Status</button>
            <button class="removeBook" data-index="${index}">Remove</button>
        `;
        bookDisplay.appendChild(bookElement);

        bookElement.querySelector('.toggleReadStatus').addEventListener('click', () => {
            myLibrary[index].toggleReadStatus();
            displayBooks(); 
        });

        bookElement.querySelector('.removeBook').addEventListener('click', () => {
            myLibrary.splice(index, 1); 
            displayBooks(); 
        });
    });
}

document.getElementById("addBook").addEventListener("click", (e) => {
    e.preventDefault();

    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const pages = document.getElementById("pages").value;

    const read = () => {
        if (checkboxNo.checked) {
            return "Not yet!";
        } else if (checkboxYes.checked) {
            return "Read";
        } else {
            return "Not yet!";
        }
    }

    const readBook = read();
    const newBookInfo = new Book(author, title, pages, readBook);

    addBookToLibrary(newBookInfo);
    form.style.display = 'none';
});

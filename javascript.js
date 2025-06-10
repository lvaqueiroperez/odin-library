let libraryDisplayContainer = document.querySelector(".libraryDisplayContainer");
let addBookBtn = document.querySelector(".addBookBtn");
let closeDialogBtn = document.querySelector(".closeDialogBtn");
let dialog = document.querySelector("dialog");

let library = [new Book("The Hobbit", "Tolkien", 300, false)];

updateLibrary();

addBookBtn.addEventListener("click", (e) => {
    dialog.showModal();
});

closeDialogBtn.addEventListener("click", (e) => {
    dialog.close();
});

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {

    library.push(new Book(title, author, pages, read));

    updateLibrary();

}

function updateLibrary() {

    removeLibrary();

    library.forEach((book) => {
        let bookContainer = document.createElement("div");
        bookContainer.setAttribute("class", "bookContainer");

        const title = document.createElement("h1");
        title.textContent = book.title;
        const author = document.createElement("h2");
        author.textContent = book.author;
        const pages = document.createElement("h3");
        pages.textContent = "Pages: " + book.pages;

        const read = document.createElement("h4");
        read.textContent = book.read ? "Read." : "Not read yet.";

        bookContainer.append(title, author, pages, read);

        libraryDisplayContainer.appendChild(bookContainer);
    });

}

function removeLibrary() {
    let booksToRemove = document.querySelectorAll(".bookContainer");
    booksToRemove.forEach((book) => { book.remove() });
}
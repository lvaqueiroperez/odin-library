let libraryDisplayContainer = document.querySelector(".libraryDisplayContainer");

let library = [];

function Book(title, author, pages) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {

    library.push(new Book(title, author, pages));

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

        bookContainer.append(title, author, pages);

        libraryDisplayContainer.appendChild(bookContainer);
    });

}

function removeLibrary() {
    let booksToRemove = document.querySelectorAll(".bookContainer");
    booksToRemove.forEach((book) => { book.remove() });
}
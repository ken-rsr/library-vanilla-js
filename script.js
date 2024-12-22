const showButton = document.getElementById('showDialog');
const dialogEl = document.getElementById('dialogElement');
const closeModalBtn = document.getElementById('close');
const addBookmBtn = document.getElementById('addBtn');
const inputEl = document.querySelectorAll('input');

const bookData = document.querySelector('data-book')
const authorData = document.querySelector('data-author')
const pagesData = document.querySelector('data-pages')
const readData = document.querySelector('data-read')

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  dialogEl.showModal();
});

closeModalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialogEl.close();
});

addBookmBtn.addEventListener("click", (e) => {
  // call the addToBook Library
  // e.preventDefault();
  dialog.close()

});

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const AddBook = new Book (bookData.value(), authorData.value(), pagesData.value(), readData.value())
  myLibrary.push(AddBook)
  }

function displayBook(){

}

const showButton = document.getElementById('showDialog');
const dialogEl = document.getElementById('dialogElement');
const closeModalBtn = document.getElementById('close');
const addBookmBtn = document.getElementById('addBtn');
const inputEl = document.querySelectorAll('input');

const bookData = document.querySelector('[data-book]')
const authorData = document.querySelector('[data-author]')
const pagesData = document.querySelector('[data-pages]')
const readData = document.querySelector('[data-read]')

const cardsContainer = document.querySelector('.cards-container')

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
  e.preventDefault(); // Prevent the form from submitting
  addBookToLibrary();
  dialogEl.close()
  displayBook()
});

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const AddBook = new Book (bookData.value, authorData.value, pagesData.value, readData.checked)
  myLibrary.push(AddBook)
  }

function displayBook(){
  // cardsContainer.innerHTML = '';
  myLibrary.forEach(book => {
    const bookCard = createBookCard(book);
    cardsContainer.append(bookCard);
  })
}

function createBookCard(book){
  // card div
  let newCardDiv = document.createElement('div')
  newCardDiv.classList.add('card-itself')

  //card title
  let titleCard = document.createElement('h3')
  titleCard.innerText = book.title
  newCardDiv.append(titleCard)

  //author
  let authorCard = document.createElement('p')
  authorCard.innerText = book.author
  newCardDiv.append(authorCard)

  //pages
  let pagesCard = document.createElement('p')
  pagesCard.innerText = book.pages
  newCardDiv.append(pagesCard)

  //read
  let cardCheckbox = document.createElement('input')
  cardCheckbox.setAttribute('type', 'checkbox');
  cardCheckbox.classList.add('card-checkbox');
  cardCheckbox.checked = book.read
  newCardDiv.append(cardCheckbox)

  return newCardDiv;
}

// not yet called
function clearInputs() {
  title.value = '';
  author.value = '';
  pages.value = '';
  read.checked = false;
}

// add a remove button on card
// add a function to make value of read to unread
// function to splice displays
// add css styling
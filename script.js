const addBookBtn = document.querySelector('#add')


const myLibrary = [];

function Book(title, author, pages, completed, starred, bookmarked) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    
    this.completed = completed;
    this.starred = starred;
    this.bookmarked = bookmarked;
}

function addBookToLibrary() {
  // do stuff here
}

function removeBook() {

}



addBookBtn.addEventListener('click', function(e) {

});
// when page loads: display library list content
// when add book button is clicked
//      create a new book object
//      add new object to library list
//      display updated list content as cards 

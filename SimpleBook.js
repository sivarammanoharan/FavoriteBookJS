// TODO: define addFavoriteBook(..) function

function addFavoriteBook(p1){
  favoriteBooks.push(p1);
}

// TODO: define printFavoriteBooks() function
function printFavoriteBooks(){
  for(let i = 0;i < favoriteBooks.length;i++){
    let book = favoriteBooks[i];
    if (!book.includes("Great")){
      console.log(book);
    }
  }
}
var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

printFavoriteBooks();

// TODO: print out favorite books
// Deng code begins from here
const books_db = [
    {
        "title": "Art for All",
        "author": "Liz Byron",
        "year": "2018",
        "category": "Arts and Entertainment",
        "publisher": "CAST, Inc.",
        "image": "ArtforAll.png"
    },
    {
        "title": "Learning About Dance",
        "author": "Nora Ambrosio",
        "year": "2016",
        "category": "Arts and Entertainment",
        "publisher": "Kendall Hunt Pub Co",
        "image": "LearningAboutDance.png"
    },
    {
        "title": "Writing about Music",
        "author": "D. Kern Holoman",
        "year": "2014",
        "category": "Music",
        "publisher": "University of California Press",
        "image": "WritingAboutMusic.png"
    },
    {
        "title": "Science & Technology 7 Student Book",
        "author": "Tedd Gibb",
        "year": "2019",
        "category": "Science and Technology",
        "publisher": "Nelson Canada ELHI",
        "image": "ScienceTechnology.png"
    },
    {
        "title": "The Art of the Screwball Comedy",
        "author": "Doris Milberg",
        "year": "2013",
        "category": "Arts and Entertainment",
        "publisher": "McFarland",
        "image": "TheArtoftheScrewballComedy.png"
    },
]

function filterBooksByCategory(category) {
    let books = books_db.filter((book) => book.category === category);
    return books;
}

function loadBooks(category){
    let toRemove = document.getElementById('toRemove');
    toRemove.remove();
    let books_category = filterBooksByCategory(category);
    // console.log("books_category: " + books_category);

    let books_container = document.createElement('div');
    books_container.className = 'books_container';

    for(let i =0; i< books_category.length; i++){
        let div = document.createElement("div");
        div.className = 'single_book';
        let img = document.createElement('img');
        let title = document.createElement('p');
        let author = document.createElement('p');
        let category = document.createElement('p');
        let year = document.createElement('p');
        let publisher = document.createElement('p');
        // console.log(books_category[i].title)
        title.innerHTML = books_category[i].title;
        author.innerHTML = books_category[i].author;
        category.innerHTML = books_category[i].category;
        year.innerHTML = books_category[i].year;
        publisher.innerHTML = books_category[i].publisher;
        img.src = books_category[i].image;
        div.appendChild(title);
        div.appendChild(img);
        div.appendChild(author);
        div.appendChild(category);
        div.appendChild(publisher);
        div.appendChild(year);
        books_container.appendChild(div);
        document.getElementById("books").appendChild(books_container);
    }  
}



// The render() function takes an array of JSON objects as its parameter. 
// It then maps over the array to create an HTML list of books and displays 
// the list in <div id="app"></div>

let render = function(data) {
    let toRemove = document.getElementById('toRemove');
    toRemove.remove();
    let app = document.getElementById('books');

    let booksHTMLString = '<ul>'+

      data.map(function(book){
        return '<li>'+
                `<img src=${book.image} height=100 width=100 >`+ '<br/>' +
                '<strong>Title: </strong>' + book.title + '<br/>' +
                '<strong>Year: </strong>' + book.year + '<br/>' +
                '<strong>Author: </strong>' + book.author + '<br/>' +
                '<strong>Category: </strong>' + book.category + '<br/>' +
                '<strong>Publisher: </strong>' + book.publisher + '<br/>' +
                

              '</li>';
      }).join('');
      + '</ul>';

    app.innerHTML = booksHTMLString;
  }


  let handleSearch = function(event) {
    event.preventDefault();
    console.log(event)
    // Get the search terms from the input field
    let searchTerm = document.getElementById("search").value;
    // Tokenize the search terms and remove empty spaces
    let tokens = searchTerm
                  .toLowerCase()
                  .split(' ')
                  .filter(function(token){
                    return token.trim() !== '';
                  });
   if(tokens.length) {
    //  Create a regular expression of all the search terms
    let searchTermRegex = new RegExp(tokens.join('|'), 'gim');
    let filteredList = books_db.filter(function(book){
      // Create a string of all object values
      let bookString = [];
      for(let key in book) {
        if(book.hasOwnProperty(key) && book[key] !== '') {
          bookString += book[key].toString().toLowerCase().trim() + ' ';
        }
      }
      // Return book objects where a match with the search regular expression if found
      return bookString.match(searchTermRegex);
    });
    console.log(filteredList);
    // Render the search results
    render(filteredList);
   }
  };

  document.getElementById("search-btn").addEventListener('click', handleSearch);
  
// Deng's code ends here
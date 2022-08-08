const books_db = [
    {
        "title": "Art for All",
        "author": "Liz Byron",
        "year": "2018",
        "category": "Arts and Entertainment",
        "publisher": "CAST, Inc.",
        "image": "Art for All.png"
    },
    {
        "title": "Learning About Dance",
        "author": "Nora Ambrosio",
        "year": "2016",
        "category": "Arts and Entertainment",
        "publisher": "Kendall Hunt Pub Co",
        "image": "Learning About Dance.png"
    },
    {
        "title": "Writing about Music",
        "author": "D. Kern Holoman",
        "year": "2014",
        "category": "Music",
        "publisher": "University of California Press",
        "image": "Writing About Music.png"
    },
    {
        "title": "Science & Technology 7 Student Book",
        "author": "Tedd Gibb",
        "year": "2019",
        "category": "Science and Technology",
        "publisher": "Nelson Canada ELHI",
        "image": "Science Technology.png"
    },
    {
        "title": "The Art of the Screwball Comedy",
        "author": "Doris Milberg",
        "year": "2013",
        "category": "Arts and Entertainment",
        "publisher": "McFarland",
        "image": "The Art of the Screwball Comedy.png"
    },
]

function filterBooksByCategory(category) {
    let books = books_db.filter((book) => book.category === category);
    return books;
}

function loadBooks(category){
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
        document.body.appendChild(books_container);
    }  
}

let category = document.getElementById('category');
category.innerText = Window.location.href.slide(window.location.href.indexOf("#")+1);

loadBooks(category);


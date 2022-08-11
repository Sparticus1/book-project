// Deng's code begins here

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// let goButton = document.getElementsByClassName('goButton')[0];
// goButton.addEventListener('click', (event) => {
//   window.location.href = `${window.location.origin}${event.currentTarget.innerHTML}`;
// })








/* ------------------------- Brenda code starts
here--------------------------------------- */


//stores items in the localStorage
function book() { 
  // var category = document.getElementById('category').value;
  // var author = document.getElementById('author').value;
  // var title = document.getElementById('title').value;
  // var edition = document.getElementById('edition').value;
  // var isbn = document.getElementById('isbn').value;
  // var description = document.getElementById('description').value;
  // var key = document.getElementById('key').value;



  let title1 = document.getElementById('title').value;
  let author1 = document.getElementById('author').value;
  let year1 = document.getElementById('year').value;
  let category1 = document.getElementById('category').value;
  let publisher1 = document.getElementById('publisher').value;
  let image1 = document.getElementById('image').value;


  // const book = {
  //   CATEGORY: category,
  //   AUTHOR: author,
  //   TITLE: title,
  //   DESCRIPTION: description,
  //   ISBN: isbn,
  //   EDITION: edition,

  // }


  const book1 = {
    category: category1,
    author: author1,
    title: title1,
    publisher: publisher1,
    year: year1,
    image: image1,

  }

  localStorage.setItem("error",book1)
  console.log(book1)
  // bookdb.push(book)
  // console.log(bookdb.length)
  // window.localStorage.setItem(key, JSON.stringify(book));
  //converting object to string


  books_db.push(book1)
  console.log(books_db.length)
  window.localStorage.setItem(key, JSON.stringify(book1));

}


//ensures the page is loaded before functions are executed.
window.onload = function () { 
  
  document.getElementById("bookForm").onsubmit = book

}

function cFunction() {
  alert("The book is added to the DNB library");
}
for (let i = 0; i < localStorage.length; i++) {
  const dnb = JSON.parse(localStorage.getItem(Object.keys(localStorage)[i]))
  // bookdb.push(dnb)
  books_db.push(dnb);
  console.log(Object.keys(localStorage)[i])
  console.log(books_db)

}
/* ------------------------- Brenda code ends
// here--------------------------------------- */



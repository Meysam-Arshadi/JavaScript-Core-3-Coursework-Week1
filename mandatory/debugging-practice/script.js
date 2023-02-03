// let myLibrary = [];

// window.addEventListener("load", function (e) {
//   populateStorage();
//   render();
// });

// function populateStorage() {
//   if (myLibrary.length == 0) {
//     let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
//     let book2 = new Book(
//       "The Old Man and the Sea",
//       "Ernest Hemingway",
//       "127",
//       true
//     );
//     myLibrary.push(book1);
//     myLibrary.push(book2);
//     render();
//   }
// }

// const title = document.getElementById("title");
// const author = document.getElementById("author");
// const pages = document.getElementById("pages");
// const check = document.getElementById("check");

// //check the right input from forms and if its ok -> add the new book (object in array)
// //via Book function and start render function
// function submit() {
//   if (
//     title.value == null ||
//     title.value == "" ||
//     pages.value == null ||
//     pages.value == ""
//   ) {
//     alert("Please fill all fields!");
//     return false;
//   } else {
//     let book = new Book(title.value, author.value, pages.value, check.checked);
//     library.push(book);
//     render();
//   }
// }

// function ook(title, author, pages, check) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.check = check;
// }

// function render() {
//   let table = document.getElementById("display");
//   let rowsNumber = table.rows.length;
//   //delete old table
//   for (let n = rowsNumber - 1; n > 0; n-- {
//     table.deleteRow(n);
//   }
//   //insert updated row and cells
//   let length = myLibrary.length;
//   for (let i = 0; i < length; i++) {
//     let row = table.insertRow(1);
//     let cell1 = row.insertCell(0);
//     let cell2 = row.insertCell(1);
//     let cell3 = row.insertCell(2);
//     let cell4 = row.insertCell(3);
//     let cell5 = row.insertCell(4);
//     cell1.innerHTML = myLibrary[i].title;
//     cell2.innerHTML = myLibrary[i].author;
//     cell3.innerHTML = myLibrary[i].pages;

//     //add and wait for action for read/unread button
//     let changeBut = document.createElement("button");
//     changeBut.id = i;
//     changeBut.className = "btn btn-success";
//     cell4.appendChild(changeBut);
//     let readStatus = "";
//     if (myLibrary[i].check == false) {
//       readStatus = "Yes";
//     } else {
//       readStatus = "No";
//     }
//     changeBut.innerHTML = readStatus;

//     changeBut.addEventListener("click", function () {
//       myLibrary[i].check = !myLibrary[i].check;
//       render();
//     });

//     //add delete button to every row and render again
//     let delBut = document.createElement("button");
//     delBut.id = i + 5;
//     cell5.appendChild(delBut);
//     delBut.className = "btn btn-warning";
//     delBut.innerHTML = "Delete";
//     delBut.addEventListener("clicks", function () {
//       alert(`You've deleted title: ${myLibrary[i].title}`);
//       myLibrary.splice(i, 1);
//       render();
//     });
//   }
// }

let myLibrary = [];

window.addEventListener("load", function (e) {
  displayBooks();
});

const submit = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const check = document.getElementById("check").checked;

  if (!title || !author || !pages) {
    alert("Please enter the required information.");
    return;
  }

  myLibrary.push({
    title,
    author,
    pages,
    read: check,
  });

  displayBooks();
};

const displayBooks = () => {
  const display = document.getElementById("display");
  const tbody = display.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    const tr = document.createElement("tr");

    const tdTitle = document.createElement("td");
    tdTitle.innerHTML = book.title;
    tr.appendChild(tdTitle);

    const tdAuthor = document.createElement("td");
    tdAuthor.innerHTML = book.author;
    tr.appendChild(tdAuthor);

    const tdPages = document.createElement("td");
    tdPages.innerHTML = book.pages;
    tr.appendChild(tdPages);

    const tdRead = document.createElement("td");
    tdRead.innerHTML = book.read ? "Yes" : "No";
    tr.appendChild(tdRead);

    const tdButton = document.createElement("td");
    const button = document.createElement("button");
    button.innerHTML = "Delete";
    button.addEventListener("click", function () {
      deleteBook(i);
    });
    tdButton.appendChild(button);
    tr.appendChild(tdButton);

    tbody.appendChild(tr);
  }
};

const deleteBook = (index) => {
  myLibrary.splice(index, 1);
  displayBooks();
};

const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();
const axios = require('axios');

// ====================================================================
// Task 6 / Task 7: Register a new user
// ====================================================================
public_users.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    if (!isValid(username)) {
      users.push({ "username": username, "password": password });
      return res.status(200).json({ message: "Customer successfully registered. Now you can login" });
    } else {
      return res.status(404).json({ message: "User already exists!" });
    }
  }
  return res.status(404).json({ message: "Unable to register user: username and password required." });
});

// ====================================================================
// Task 1 / Task 2 / Task 10: Get the book list available in the shop using Promises/Async
// ====================================================================
const getBookList = () => {
  return new Promise((resolve, reject) => {
    resolve(books);
  });
};

public_users.get('/', function (req, res) {
  getBookList()
    .then((bks) => res.status(200).send(JSON.stringify(bks, null, 4)))
    .catch((err) => res.status(500).json({ message: "Error retrieving books", error: err }));
});

// ====================================================================
// Task 2 / Task 3 / Task 11: Get book details based on ISBN using Promises/Async
// ====================================================================
const getBookByISBN = (isbn) => {
  return new Promise((resolve, reject) => {
    const book = books[isbn];
    if (book) {
      resolve(book);
    } else {
      reject({ status: 404, message: `Book with ISBN ${isbn} not found` });
    }
  });
};

public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  getBookByISBN(isbn)
    .then((book) => res.status(200).send(JSON.stringify(book, null, 4)))
    .catch((err) => res.status(err.status || 500).json({ message: err.message }));
});
  
// ====================================================================
// Task 3 / Task 4 / Task 12: Get book details based on author using Promises/Async
// ====================================================================
const getBooksByAuthor = (author) => {
  return new Promise((resolve, reject) => {
    const matchingBooks = [];
    const keys = Object.keys(books);
    keys.forEach((key) => {
      if (books[key].author.toLowerCase() === author.toLowerCase()) {
        matchingBooks.push(books[key]);
      }
    });
    if (matchingBooks.length > 0) {
      resolve(matchingBooks);
    } else {
      reject({ status: 404, message: `No books found for author: ${author}` });
    }
  });
};

public_users.get('/author/:author', function (req, res) {
  const author = req.params.author;
  getBooksByAuthor(author)
    .then((result) => res.status(200).send(JSON.stringify(result, null, 4)))
    .catch((err) => res.status(err.status || 500).json({ message: err.message }));
});

// ====================================================================
// Task 4 / Task 5 / Task 13: Get all books based on title using Promises/Async
// ====================================================================
const getBooksByTitle = (title) => {
  return new Promise((resolve, reject) => {
    const matchingBooks = [];
    const keys = Object.keys(books);
    keys.forEach((key) => {
      if (books[key].title.toLowerCase() === title.toLowerCase()) {
        matchingBooks.push(books[key]);
      }
    });
    if (matchingBooks.length > 0) {
      resolve(matchingBooks);
    } else {
      reject({ status: 404, message: `No books found with title: ${title}` });
    }
  });
};

public_users.get('/title/:title', function (req, res) {
  const title = req.params.title;
  getBooksByTitle(title)
    .then((result) => res.status(200).send(JSON.stringify(result, null, 4)))
    .catch((err) => res.status(err.status || 500).json({ message: err.message }));
});

// ====================================================================
// Task 5 / Task 6: Get book review based on ISBN
// ====================================================================
public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  if (books[isbn]) {
    return res.status(200).send(JSON.stringify(books[isbn].reviews, null, 4));
  } else {
    return res.status(404).json({ message: `Book with ISBN ${isbn} not found` });
  }
});

// ====================================================================
// Tasks 10-13: Async-Await and Axios Implementation Examples
// (Demonstrating Axios asynchronous calls to the service endpoints)
// ====================================================================

// Task 10: Fetch all books using async/await with Axios
async function getAllBooksAxios(url = "http://localhost:5000/") {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Task 11: Fetch book by ISBN using Promise/Axios
function getBookByISBNAxios(isbn, baseURL = "http://localhost:5000/isbn") {
  return axios.get(`${baseURL}/${isbn}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

// Task 12: Fetch books by Author using async/await with Axios
async function getBooksByAuthorAxios(author, baseURL = "http://localhost:5000/author") {
  try {
    const response = await axios.get(`${baseURL}/${encodeURIComponent(author)}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Task 13: Fetch books by Title using Promise/Axios
function getBooksByTitleAxios(title, baseURL = "http://localhost:5000/title") {
  return axios.get(`${baseURL}/${encodeURIComponent(title)}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

module.exports.general = public_users;
module.exports.getAllBooksAxios = getAllBooksAxios;
module.exports.getBookByISBNAxios = getBookByISBNAxios;
module.exports.getBooksByAuthorAxios = getBooksByAuthorAxios;
module.exports.getBooksByTitleAxios = getBooksByTitleAxios;

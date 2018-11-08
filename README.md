# MyReads Project

This project is mainly for the **Book Lovers** who loves reading book, and helping them, so that they can keep of what books they are currently reading. Along with which books they want to read in future and which book they have completed reading.

## Using this App

* Reader can move the book from one shelf to other. He can move from currently reading to Want To read section and completed reading section.
* Reader can search the books online and he can add those to personal shelves. 

## TL;DR

To get help in started using right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Navigating through this awesome project
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon
│   └── index.html 
└── src
    ├── App.css # Styles for app.
    ├── App.js # This is the root of this app. 
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    ├── index.js # It is used for DOM rendering only.
    ├── Images
    │   └── geometry2.png # Background image used.
    └── components
        ├── Search.js # Used for searching of different books
        ├── ShowingSingleBook.js # used for rendering a single book and contain all the properties of book
        ├── ShelfButton.js # button which on clicking changes the shelf on the book.
        └── Shelf.js # main shelves for our app. Where three are three shelves "currentlyReading", "wantToRead", "read" and all the books are placed in their respective shelf.     
```
### PRO TIP

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository used the starter code for _all_ Udacity students. Check [Here](https://github.com/udacity/reactnd-project-myreads-starter).

### References to be checked
* [Thinking in ReactJS](https://reactjs.org/docs/thinking-in-react.html)
* [Project Rubric](https://review.udacity.com/#!/rubrics/918/view)
* [React Router](https://reacttraining.com/react-router/web/api/BrowserRouter)
* [Passing data between components](https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17)
* [List and keys](https://reactjs.org/docs/lists-and-keys.html)
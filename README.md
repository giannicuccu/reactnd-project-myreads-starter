# MyReads Project
This is an implementation of React MyReader App for Udacity's React Fundamentals course. 
This project was started forking and cloning the start repository.


## Installation and Run

* clone this repository
* install all project dependencies with `npm install`
* start the development server with `npm start`
* point your browser to [http://localhost:3000/](http://localhost:3000/)


## Live demo
[https://myreadsprj.firebaseapp.com/](https://myreadsprj.firebaseapp.com/)

## Final project file structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # MODIFIED # npm package manager file. 
├── public
│   ├── favicon.ico # React Icon
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the  app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BooksList.js # NEW FILE # the main home page component
    ├── BooksSearch.js # NEW FILE # the main search page component
    ├── components # NEW FOLDER # React app components.
    │   ├── BookShelf.js # NEW FILE # Component thath display shelves in home and search page
    │   ├── BookShelfChanger.js # NEW FILE # Component for the shelf selector
    │   └── Loading.js # NEW FILE # loadin bar component used in search page- https://github.com/lonelyclick/react-loading-bar
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    │   └── busy.svg # NEW FILE # loading icon for shelf select
    ├── placeholders # NEW FOLDER # Image placeholders.
    │   └── cover-unavailable.png # NEW FILE # placeholder for unavailable covers
    ├── index.css # Global styles. 
    └── index.js # Used for DOM rendering only.
```



## Backend Server

API calls are sent to the Udacity project backend server

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Loaders Icon
https://github.com/SamHerbert/SVG-Loaders
https://github.com/lonelyclick/react-loading-bar


## Contributing
feel free to send pull requests to this repo

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

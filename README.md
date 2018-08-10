# MyReads Project
This is an implementation of React MyReader App for Udacity's React Fundamentals course. 


## Installation and Run

* clone this repository
* install all project dependencies with `npm install`
* start the development server with `npm start`
* point your browser to  [http://localhost:3000/]

## Final project file structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── yarn.lock # yarn lockfile
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── components # NEW FOLDER # React app components.
    │   ├── BookShelf.js # NEW FILE # Component thath display shelves in home and search page
    │   ├── BookShelfChanger.js # NEW FILE # Component for the shelf selector
    │   └── Loading.js # NEW FILE # loadin bar component used in search page- https://github.com/lonelyclick/react-loading-bar
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── placeholders # NEW FOLDER # Image placeholders.
    │   └── cover-unavailable.png # NEW FILE # placeholder for unavailable covers
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```



## Backend Server

API calls are sent to the Udacity project backend server

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing
feel free to send pull requests to this repo

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

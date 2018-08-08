import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList';
import BookSearch from './BookSearch';


class BooksApp extends React.Component {

  constructor(props) {
    super(props);
    this.updateShelf = this.updateShelf.bind(this);
    this.checkForBookInShelf = this.checkForBookInShelf.bind(this);
    
    this.state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      //showSearchPage: false,
      books : []
    }
  }


  // Get books via API
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateShelf( book, newShelf, fromSearch = false){
    // console.log('UPDATING to '+ newShelf)
    //  console.log(this.state)
    //  console.log(fromSearch)
    BooksAPI.update(book,newShelf)
    
    // TODO: you are not removing from state
    let books = this.state.books.map( v => {
      if (book.id === v.id) {
          v.shelf = newShelf
        }
      return v
    })

    if (fromSearch === true){ 
      
      book.shelf = newShelf;
      books.push(book);
    }

    // console.log(books);
    // console.log(this.state)
    this.setState({ books })
    //console.log(this.state)
    
  }


  checkForBookInShelf(book){

    //console.log('check for book id ' + book.id)

    const match = this.state.books.filter(v => v.id === book.id ? v : false )
    //console.log(match.length)
    return match.length ? match[0].shelf : 'none'
    //return match[0].shelf || 'none'
  }

  

  render() {
    
    return (
      <div className="app">
        
            <Route exact path='/' render={ () => {
              return <BookList books={this.state.books} updateShelf={this.updateShelf} />
            }} />  

            <Route exact path='/search' render={ () => {
              return <BookSearch  updateShelf={this.updateShelf} checkForBookInShelf={this.checkForBookInShelf}/> 
            }} />
       
      </div>
    )
  }
}

export default BooksApp

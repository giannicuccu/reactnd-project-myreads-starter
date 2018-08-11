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
      books : []
    }
  };


  // Get books via API
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  updateShelf = ( book, newShelf, fromSearch = false) => {
    
    let promise = new Promise( (resolve, reject) => {

      BooksAPI.update(book,newShelf)
      .then(() => {
        //TODO: Books assigned to "none" could be removed from state
        let books = this.state.books.map( v => {
          if (book.id === v.id) {
              v.shelf = newShelf;
            }
            return v
          });
          
        //Filter out duplicated books added via search
        if (fromSearch === true){ 
          books = books.filter( v => v.id !== book.id)
          book.shelf = newShelf;
          books.push(book);
        };

        this.setState({ books })
        resolve()

      }
    )
  });

  return promise
  }


  checkForBookInShelf(book){
    const match = this.state.books.filter(v => v.id === book.id ? v : false );
    return match.length ? match[0].shelf : 'none';
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

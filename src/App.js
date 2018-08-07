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

  updateShelf(book,newShelf){
    console.log('UPDATING to '+ newShelf)
    console.log(this.state)
    BooksAPI.update(book,newShelf)
    

    let updatedBooks = this.state.books.map( v => {
      if (book.id === v.id) {
          v.shelf = newShelf
        }
      return v
    })

    //console.log(updatedBooks);
    this.setState({books: updatedBooks})


  //    this.setState( state => { books: state.books.map( v => { 
  //     //return book.id === v.id? v.shelf=newShelf :  v}
  //   if(book.id === v.id){
  //     console.log(book.id )
  //     v.shelf = newShelf
  //     console.log(v )
  //     return v
  //   }else{return v}

  // }
  //   ) } ) 
    
    
    
    
  }

  

  render() {
    
    return (
      <div className="app">
        
            <Route exact path='/' render={ () => {
              return <BookList books={this.state.books} updateShelf={this.updateShelf} />
            }} />  

            <Route exact path='/search' render={ () => {
              return <BookSearch /> 
            }} />
       
      </div>
    )
  }
}

export default BooksApp

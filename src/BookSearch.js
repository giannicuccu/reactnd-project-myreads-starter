import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';

class BooksSearch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      query: '' ,
      foundBooks: []
    }

  }

  // componentDidUpdate(){
  //   NOOP
  // }

  // componentWillUnmount() {
  //   NOP
  // }

  //TODO: fix the search showing last search when rapidly.delete keys
  search = (query) => {

    this.setState({ query: query })

    if (query.trim() !== '') {
      BooksAPI.search(query).then((foundBooks) => {
          !foundBooks.error && this.setState({ foundBooks });
           foundBooks.error && this.setState({ foundBooks: [] });
        })
    } else if (query.trim() === '') {
        this.setState({ foundBooks: [] });
      }
  }


  render(){
      
      const { updateShelf, checkForBookInShelf } = this.props
      const { query, foundBooks } = this.state
        return (
            <div className="search-books">
            <div className="search-books-bar">
            <Link to='/' className="close-search"/>
            <div className="search-books-input-wrapper">
              <input 
                type="text" 
                placeholder="Search by title or author" 
                value={query}
                onChange={(event) => this.search(event.target.value)}
                />
            </div>
            </div>
            <div className="search-books-results">
              <p>Results for: {query}</p>
                <ol className="books-grid">
                  <BookShelf 
                    updateShelf={updateShelf} 
                    books={foundBooks} 
                    fromSearch={true} 
                    shelfLabel={'results for '+ query } 
                    checkForBookInShelf={checkForBookInShelf} 
                  />
                </ol>
            </div>
          </div>
        )
    }
}

export default BooksSearch
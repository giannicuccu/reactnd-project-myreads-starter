import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf';

class BooksSearch extends React.Component {

  state = {
    query: '',
    foundBooks: []
  }

  search = (query) => {
    this.setState({ query: query })
    BooksAPI.search(query).then((foundBooks) => {
      this.setState({ foundBooks })
     

    })
  }
    render(){
      
      const { updateShelf } = this.props
      const { query, foundBooks } = this.state
        return (
            <div className="search-books">
            <div className="search-books-bar">
            <Link to='/' className="close-search"/>
              {/* <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a> */}
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
              <BookShelf updateShelf={updateShelf} books={foundBooks} fromSearch={true} shelfLabel={'results for '+ query } />
              </ol>
            </div>
          </div>
            
            
        )
    }
}

export default BooksSearch
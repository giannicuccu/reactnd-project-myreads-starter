import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf';

class BooksSearch extends React.Component {

  state = {
    query: '',
    books: []
  }

  search = (query) => {
    this.setState({ query: query })
    BooksAPI.search(query).then((books) => {
      this.setState({ books })
    })
  }

    render(){
      const { updateShelf } = this.props
      const { query, books } = this.state
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
              <BookShelf updateShelf={updateShelf} books={books}  shelfLabel={'results'} />
              </ol>
            </div>
          </div>
            
            
        )
    }
}

export default BooksSearch
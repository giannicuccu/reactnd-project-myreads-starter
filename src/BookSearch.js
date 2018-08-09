import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import LoadingBar from './Loading'




class BooksSearch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      query: '' ,
      loading: false,
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
    
    this.setState({ query });
    this.setState({ loading: true });

    BooksAPI.search(query).then( (foundBooks) => {
      this.setState({ foundBooks: []});
      console.log('-------------------')
      console.log(this.state.query)
      console.log(foundBooks)
      console.log('-------------------')
      console.log('    #     ')

      if (this.state.query !== '' && !foundBooks.error){
        this.setState({ foundBooks })
        
      }
        
      }).then(()=> (this.setState({ loading: false })))

    //   if (this.state.query.trim() === '') {
    //     this.setState({ foundBooks: []});
    //     return
    //   } else if (this.state.query.trim() !== '') {
    //     BooksAPI.search(query).then((foundBooks) => {
    //       console.log(foundBooks)
    //         // !foundBooks.error && this.setState({ foundBooks });
    //         // foundBooks.error && this.setState({ foundBooks: [] });
    //       })
    // } 

/*     if (query.trim() !== '') {
      BooksAPI.search(query).then((foundBooks) => {
          !foundBooks.error && this.setState({ foundBooks });
           foundBooks.error && this.setState({ foundBooks: [] });
        })
    } else if (query.trim() === '') {
        this.setState({ foundBooks: [] });
      } */

      
  }


  render(){
      
      const { updateShelf, checkForBookInShelf } = this.props
      const { query, loading, foundBooks } = this.state
        return (
          
            <div className="search-books">
            <LoadingBar  show={ loading }  />
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
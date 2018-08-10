import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelf from './components/BookShelf';
import LoadingBar from './components/Loading';
import PropTypes from 'prop-types';




class BooksSearch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      query: '' ,
      loading: false,
      searchMessage : '',
      foundBooks: []
    }

  }

  getCurrentQuery = () =>  this.state.query
  setResults = (results) => this.setState({ foundBooks: results } )
  setSearchMessage = (message) => this.setState({ searchMessage: message } )

  // componentDidUpdate(){
  //   NOOP
  // }

  // componentWillUnmount() {
  //   NOP
  // }

  search = (query, currentQuery = this.getCurrentQuery, setResults = this.setResults, setSearchMessage = this.setSearchMessage) => {

    //debugger
    this.setState({ query });
    this.setState({ loading: true });

    let promise = new Promise( function(resolve, reject) {
      
      
      BooksAPI.search(query)
      .then( res => {
          //console.log( query +' -- '+ currentQuery());
          if(query === currentQuery()){

            if ( res === undefined || res.error ){ 
              res ? setSearchMessage('No results matching your query'): setSearchMessage('');
              setResults([]);
              
            } else { 
              setSearchMessage('');
              setResults(res);
            }
            
            resolve();

          } else {
            reject();
          }
        }

      )
      // THIS DOES NOT WORK
      //.catch(() =>  new Error('FETCH FAILED'))
      
    });
    
    //console.log(promise)

    promise.then(
      result => {
        //console.log('PROMISE RESOLVED')
        this.setState({ loading: false })
      },
      error => {
        //console.log('RESPONSE DISCARDED - NOT IN SYNC WITH CURRENT SEARCH INPUT ') 
      }
    )
  }



  render(){
      
      const { updateShelf, checkForBookInShelf } = this.props
      const { query, loading, foundBooks, searchMessage } = this.state
        return (
          
            <div className="search-books">
            <LoadingBar show={ loading } />
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
            
                  <ol className="books-grid">
                  <BookShelf 
                    updateShelf={updateShelf}
                    books={foundBooks}
                    fromSearch={true}
                    shelfLabel={query}
                    searchMessage = {searchMessage}
                    checkForBookInShelf={checkForBookInShelf}
                  />
                </ol>
            </div>
          </div>
        )
    }
}


BooksSearch.propTypes = {
  updateShelf: PropTypes.func.isRequired,
  checkForBookInShelf: PropTypes.func.isRequired
};

export default BooksSearch
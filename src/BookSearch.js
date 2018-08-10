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

  getCurrentQuery = () =>  this.state.query
  setResults = (results) => {
    //console.log('setting results')
    //console.log(results)
    this.setState({ foundBooks: results } )}

  // componentDidUpdate(){
  //   NOOP
  // }

  // componentWillUnmount() {
  //   NOP
  // }

  instantSearch = (query, prevQuery = this.state.query, currentQuery = this.getCurrentQuery, setResults=this.setResults) => {
    this.setState({ query });
    this.setState({ loading: true });

    let promise = new Promise( function(resolve, reject) {
      
      BooksAPI.search(query)
      .then( res => {
        //console.log( query +' -- '+ currentQuery());
        if(query === currentQuery()){
          //debugger
          //console.log(res)

          if ( res === undefined || res.error ){
            setResults([])
          }

          else{
            setResults(res)
            
          }
          resolve()
        }
          else{
            reject()
            //setResults([])
            //console.log('INVALID not in sync with current query');
          }
      }
    
    
    ).catch(() =>  new Error('MY FETCH FAILED'))
     
      //setTimeout(() => reject(new Error(query+'-'+prevQuery)), 1000);


    });

    promise.then(
      result => {
        console.log('PROMISE RESOLVED')
        this.setState({ loading: false })
      },         
      error => {
        console.log('RESPONSE DISCARDED - NOT IN SYNC WITH CURRENT SEARCH INPUT ') 
      }// shows "Error: Whoops!" after 1 second
    )
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
                onChange={(event) => this.instantSearch(event.target.value)}
                />
            </div>
            </div>
            <div className="search-books-results">
            
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
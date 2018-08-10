import React from 'react' ;
import BookShelfChanger from './BookShelfChanger' ;
import placeholder from '../placeholders/cover-unavailable.png' ;

class BookShelf extends React.Component {

    

    render(){

        const { updateShelf, books, shelfLabel, fromSearch, checkForBookInShelf,searchMessage } = this.props ;
        
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title"> { fromSearch && books.length === 0 && shelfLabel !== ''? 'Searching... '+ shelfLabel : shelfLabel} </h2>
            {searchMessage}
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map( book => (
                                <li key={ book.id }>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url( ${ book.imageLinks ? book.imageLinks.thumbnail: placeholder} )` }}></div>
                                                <BookShelfChanger updateShelf={updateShelf} fromSearch={fromSearch} book={book} checkForBookInShelf={checkForBookInShelf}/>
                                            </div>
                                        <div className="book-title"> { book.title } </div>
                                        <div className="book-authors">{ book.authors? book.authors.join(' , ') : 'Author Unavailable'}</div>
                                    </div>
                                </li>
                            )
                        )
                    }
                </ol>
            </div>
        </div>
        )

    }


}


export default BookShelf
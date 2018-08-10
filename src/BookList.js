import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class BooksList extends React.Component {



    render(){

        const { books, updateShelf } = this.props ;

        const readBooks = books.filter(v => v.shelf === 'read') ;
        const readingBooks = books.filter(v => v.shelf === 'currentlyReading') ;
        const wantReadBooks = books.filter(v => v.shelf === 'wantToRead') ;


        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf updateShelf={updateShelf} books={readingBooks} shelfLabel={'Currently Reading'} /> 
                        <BookShelf updateShelf={updateShelf} books={wantReadBooks}  shelfLabel={'Want to read '} /> 
                        <BookShelf updateShelf={updateShelf} books={readBooks}  shelfLabel={'Read'} /> 
                    </div>
                </div>
                <div className="open-search">
                <Link to='/search' />
                </div>
            </div>
        )
    }
}

export default BooksList
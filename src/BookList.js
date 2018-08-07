import React from 'react'
import ReadingBookShelf from './ReadingBookShelf';
import WantReadBookShelf from './WantReadBookShelf';
import ReadBookShelf from './ReadBookShelf';

class BooksList extends React.Component {

    

    render(){
        const { books, updateShelf } = this.props
        console.log(books)
        console.log(updateShelf)
        const readBooks = books.filter(v => v.shelf === 'read')
        const readingBooks = books.filter(v => v.shelf === 'currentlyReading')
        const wantReadBooks = books.filter(v => v.shelf === 'wantToRead')
        

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <ReadingBookShelf  updateShelf={updateShelf} readingBooks={readingBooks}/>
                        <WantReadBookShelf updateShelf={updateShelf} readingBooks={wantReadBooks}/>
                        <ReadBookShelf updateShelf={updateShelf} readingBooks={readBooks}/>
                    </div>
                </div>
            </div>
            
            
            
        )
    }
}

export default BooksList
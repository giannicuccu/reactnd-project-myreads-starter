import React from 'react'
import { Link } from 'react-router-dom'
// import ReadingBookShelf from './ReadingBookShelf';
// import WantReadBookShelf from './WantReadBookShelf';
// import ReadBookShelf from './ReadBookShelf';
import BookShelf from './BookShelf';

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
                        {/* <ReadingBookShelf  updateShelf={updateShelf} books={readingBooks}/>
                        <WantReadBookShelf updateShelf={updateShelf} books={wantReadBooks}/>
                        <ReadBookShelf     updateShelf={updateShelf} books={readBooks}/> */}

                        <BookShelf     updateShelf={updateShelf} books={readingBooks}/> 
                        <BookShelf     updateShelf={updateShelf} books={wantReadBooks}/> 
                        <BookShelf     updateShelf={updateShelf} books={readBooks}/> 
                    </div>
                </div>

            <div className="open-search">
            {/* <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a> */}
            <Link to='/search' />
            </div>

            </div>
            
            
            
        )
    }
}

export default BooksList
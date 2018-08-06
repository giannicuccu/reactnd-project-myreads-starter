import React from 'react'

class BooksList extends React.Component {

    

    render(){
        const { books } = this.props
        console.log(books)
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

                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                 {
                                     readingBooks.map( book => (
                                                <li key={ book.id }>
                                                    <div className="book">
                                                        <div className="book-top">
                                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(" ${book.imageLinks.thumbnail} ")` }}></div>
                                                            <div className="book-shelf-changer">
                                                                <select>
                                                                    <option value="move" disabled>Move to...</option>
                                                                    <option value="currentlyReading">Currently Reading</option>
                                                                    <option value="wantToRead">Want to Read</option>
                                                                    <option value="read">Read</option>
                                                                    <option value="none">None</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="book-title"> { book.title } </div>
                                                        <div className="book-authors">{ book.authors.join(' , ') }</div>
                                                    </div>
                                                </li>
                      
                                            )
                                        )
                                 }
                                </ol>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            
            
            
        )
    }
}

export default BooksList
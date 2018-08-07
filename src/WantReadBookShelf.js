import React from 'react' 
import BookShelfChanger from './BookShelfChanger'

class WantReadBookShelf extends React.Component {

    

    render(){
    
        const { updateShelf } = this.props

        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        this.props.readingBooks.map( book => (
                                <li key={ book.id }>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(" ${book.imageLinks.thumbnail} ")` }}></div>
                                            <BookShelfChanger updateShelf={updateShelf} book={book}/>
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
        )

    }


}






export default WantReadBookShelf
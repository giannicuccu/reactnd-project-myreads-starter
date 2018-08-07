import React from 'react' 
import BookShelfChanger from './BookShelfChanger'

class BookShelf extends React.Component {


    render(){

        const { updateShelf, books, shelfLabel } = this.props
        
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title"> {shelfLabel} </h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map( book => (
                                <li key={ book.id }>
                                    <div className="book">
                                        <div className="book-top">
                                            {/* <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(" ${book.imageLinks.thumbnail} ")` }}></div> */}
                                            {/* if (book.imageLinks.thumbnail || false){
                                                
                                                
                                            } */}
                                            {/* { thumbnail =  book.imageLinks.thumbnail || ''} */}
                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url( ${ book.imageLinks ? book.imageLinks.thumbnail: false} )` }}></div>
                                            <BookShelfChanger updateShelf={updateShelf} book={book}/>
                                            </div>
                                        <div className="book-title"> { book.title } </div>
                                        <div className="book-authors">{ book.authors? book.authors.join(' , ') : ' Unavailable '}</div>
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
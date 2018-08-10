import React from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends React.Component {


    handleShelfChange = (e) => {        
        this.props.updateShelf(this.props.book, e.target.value, this.props.fromSearch);
        }


    getBookShelfFromMyLibrary(){
        return this.props.checkForBookInShelf( this.props.book );
    }

    render(){

        const { shelf } = this.props.book ;
    
        return(
            
            <div className="book-shelf-changer" >
                <select value={ shelf || this.getBookShelfFromMyLibrary() } onChange={this.handleShelfChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read" >Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )

    }

}

BookShelfChanger.propTypes = {
    updateShelf: PropTypes.func.isRequired,
    checkForBookInShelf: PropTypes.func,
    shelf: PropTypes.string,
    book: PropTypes.object.isRequired,
    fromSearch: PropTypes.bool
        
  };

export default BookShelfChanger
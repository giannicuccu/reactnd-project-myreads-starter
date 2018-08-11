import React from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends React.Component {

    state = {
        busy: false
    }

//     componentWillReceiveProps (){
//         console.log('WILL RECEIVE PROPS')
//     }

//     componentDidUpdate(){
//         console.log('DID UPDATE')
//   }

 
//   componentWillUnmount() {
//     console.log('WILL UNMOUNT')
//   }
 


    handleShelfChange = (e, updateShelf=this.props.updateShelf, book=this.props.book, fromSearch=this.props.fromSearch) => {

            this.setState({busy: true});

            updateShelf(book, e.target.value, fromSearch)
            .then(()=> fromSearch && this.setState({busy: false}));

        }


    getBookShelfFromMyLibrary(){
        return this.props.checkForBookInShelf( this.props.book );
    }

    render(){
        //console.log('RENDER')

        const { shelf } = this.props.book ;

        let className = 'book-shelf-changer ';
            className += this.state.busy ? 'busy':'ready';
    
        return(
            
            <div className={className}>
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
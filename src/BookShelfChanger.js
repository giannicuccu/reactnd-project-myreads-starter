import React from 'react' 

class ReadBookShelfChanger extends React.Component {

    handleShelfChange = (e) => {
        //console.log(e.target.value);
            this.props.updateShelf(this.props.book, e.target.value, this.props.fromSearch);
        }

    render(){
        //console.log(this.props.book)
        const { shelf } = this.props.book 
        //console.log(shelf)

    
        return(
            
            <div className="book-shelf-changer" >
                <select value={shelf || 'move'} onChange={this.handleShelfChange}>
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

export default ReadBookShelfChanger
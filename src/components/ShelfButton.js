import React , {Component } from 'react';

export default class changeShelfButton extends Component{
	render(){
		const{ book,ChangingShelf} = this.props;
    const ShelfValue = book.shelf? book.shelf : 'none';
		return(
				<div className="book-shelf-changer">
                  <select value={ShelfValue}  onChange= { (event) => {ChangingShelf(book, event.target.value)}} >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
			);
	}
}
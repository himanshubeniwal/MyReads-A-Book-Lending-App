import React,{ Component} from 'react';

import ShowingSingleBook from './ShowingSingleBook';

export default class Shelf extends Component{
  state = {
    ShelfName: '',
  }
  render(){
    const {books, shelf, ChangingShelf} = this.props;
    const shelvesName = {
    currentlyReading: "Currently Reading", 
    wantToRead: "Want To Read", 
    read: "Read"
    }
    const label = shelvesName[shelf];

    return(
            <div key={shelf.id}>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{ label }</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                       {
                          books.filter( book => book.shelf === shelf).map(
                          (book,id) => (
                          <div key = {book.id}>
                            <ShowingSingleBook book = {book} books = {books} ChangingShelf={ChangingShelf}/>
                          </div>
                          )
                          )
                       }
                    </ol>
                  </div>
                </div>
            </div>
      );
  }
}
import React , {Component} from 'react';
import ShelfButton from './ShelfButton';
export default class ShowingSingleBook extends Component{

	render(){
    const{ book, ChangingShelf} = this.props;

		return(
      <div>
                    <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage:  `url(${book.imageLinks ? book.imageLinks.thumbnail: 'NA'})` }}></div>                     
                            <ShelfButton book = {book} ChangingShelf={ChangingShelf}/>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">Author(s):  {book.authors}</div>
                          <div className="book-authors">Published Date: {book.publishedDate? book.publishedDate : 'NA'}</div>
                          <div className="book-authors">Categories: {book.categories? book.categories : 'NA'}</div>
                          <div className="book-authors">Avg. Rating: {book.averageRating? book.averageRating : 'NA'}</div>
                          
                        </div>
                    </li>

        </div>
      );
	}
}
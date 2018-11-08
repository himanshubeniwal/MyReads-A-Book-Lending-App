import React, { Component} from 'react';
import * as BooksAPI from '../BooksAPI';
import { Link } from 'react-router-dom';
import ShowingSingleBook from './ShowingSingleBook';

export default class Search extends Component{
	state = {
		searched_books:[],
		query:'',
	}
	updateState = (query) => {
		this.setState({query})
		this.searchQuery(query)
	}
	searchQuery = (query) => {
    if (query.length>0) {
      	BooksAPI.search(query).then( (searched_books) => {
        !searched_books.error ?  this.setState({ searched_books:searched_books }) : this.setState( {searched_books:[]})
      	})
    	}
    else if (query === '') {
      this.setState({ searched_books: [] });
    	}
	}
	render(){
		const { books, ChangingShelf} = this.props;
		const {searched_books } = this.state;

		return(
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" value = {this.state.query} onChange = { (e) => {this.updateState(e.target.value)} } placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
          		{	
          			searched_books.map((bo , id)=> 
					<div key={bo.id}>	
					<ShowingSingleBook book ={bo} books ={books} ChangingShelf={ChangingShelf} />
          			</div>		 
          		)}
              </ol>
            </div>
          </div>
       
			);
	}
}
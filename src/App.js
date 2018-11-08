import React from 'react';
import * as BooksAPI from './BooksAPI';

import {Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Shelf from './components/Shelf';

import Search from './components/Search';
import './App.css';
export default class App extends React.Component {
  state = {
    books: []
  }
 componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(  () => {
      BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
    })
  }
  render() {
    let shelfTypes =[
    "currentlyReading",
    "wantToRead",
    "read"
    ]
    return (
      <div className="app">
        <Route exact path ="/" render= { () => (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                { 
                  shelfTypes.map( (shelf,id) =>
                  <div key={id}>   
                    <Shelf books = {this.state.books} shelf = {shelf} ChangingShelf={this.updateShelf}/>  
                  </div>
                  )
                }
              </div>
              <div className="center-text"> 
                <h2 className="bookshelf-titlee">
                    About this Page
                </h2>
                <p> Made with 
                  <i className="fa fa-fw fa-coffee"></i> 
                  and<i className="fa fa-fw fa-music"></i>
                  by <b>Himanshu Beniwal</b> </p>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search"> Add a book </Link>
            </div>
          </div>
          )}/>
        <Route path="/search" render ={ () => (
            <Search ChangingShelf={this.updateShelf} books={this.state.books}/>
          )} />

      </div>
    )
  }
}



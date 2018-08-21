import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
// New components with original html
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    shelves: [
      {shelfTitle: 'Currently Reading', shelfName: 'currentlyReading'},
      {shelfTitle: 'Want to read', shelfName: 'wantToRead'},
      {shelfTitle: 'Read', shelfName: 'read'}
    ],

    books: []
  }
  
  refreshPage = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })  
  }

  componentDidMount() {    
    this.refreshPage()
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    this.refreshPage()
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks
            moveShelf={this.moveShelf}
            books={this.state.books} 
          />
        )} />
        
        <Route exact path="/" render={() => (
          <ListBooks
            shelvesArray={this.state.shelves}
            booksArray={this.state.books}
            moveShelf={this.moveShelf}
         />
        )} />
      </div>
    )
  }
}

export default BooksApp

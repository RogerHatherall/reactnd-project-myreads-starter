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
  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({
      books: books
    }))
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks />
        )} />
        
        <Route exact path="/" render={() => (
          <ListBooks
            shelvesArray={this.state.shelves}
            booksArray={this.state.books}
         />
        )} />
      </div>
    )
  }
}

export default BooksApp

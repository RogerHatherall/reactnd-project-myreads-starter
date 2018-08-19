import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
// New components with original html
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    shelves: [
      'Currently Reading',
      'Want to read',
      'Read'
    ]
  }

  render() {
    return (
      <div className="app">
        <SearchBooks />
        <ListBooks
          shelvesArray={this.state.shelves}
         />
      </div>
    )
  }
}

export default BooksApp

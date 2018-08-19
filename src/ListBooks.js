import React, { Component } from 'react';
import Shelf from './Shelf'

//New component with html from App.cs
class ListBooks extends Component {
  render () {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <ol className="book-shelves">
            <li>
              <Shelf />
            </li>
          </ol>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default ListBooks;
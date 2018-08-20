import React, { Component } from 'react';
import Book from './Book'

class Shelf extends Component {
  render () {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {
              this.props.booksArray
                .filter(book => book.shelf === this.props.shelfName)
                .map(book => (
                  <li key={book.id}>
                    <Book
                      book={book}
                    />
                  </li>
                ))
            }
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Shelf;
import React, { Component } from 'react';
import Shelf from './Shelf'
import { Link } from 'react-router-dom';

//New component with html from App.cs
class ListBooks extends Component {
  render () {
    const bookShelfArray=this.props.booksArray
    
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <ol className="book-shelves">
            {
              this.props.shelvesArray
                .map(shelf => (
                  <li key={shelf.shelfName}>
                    <Shelf 
                    shelfTitle={shelf.shelfTitle}
                    shelfName={shelf.shelfName}
                    booksArray={bookShelfArray}
                    moveShelf={this.props.moveShelf}
                    />
                  </li>
                ))
              }
          </ol>
        </div>
        <div className="open-search">
              {/*<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>*/}
              <Link to="/search">
                Add a book
              </Link>
            </div>
      </div>
    )
  }
}

export default ListBooks;
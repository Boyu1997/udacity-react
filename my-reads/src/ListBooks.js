import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfTitle: PropTypes.string.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  }

  render () {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

            {this.props.books.map((book) => (
              <li key={book.id}>
                <Book id={book.id}
                  title={book.title}
                  author={book.authors}
                  url={book.imageLinks.smallThumbnail}
                  shelf={book.shelf}
                  onUpdateShelf={this.props.onUpdateShelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default ListBooks

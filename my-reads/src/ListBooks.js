import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfTitle: PropTypes.string.isRequired
  }

  render () {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

            {this.props.books.map((book) => (
              <li key={book.title}>
                <Book title={book.title}
                  author={book.author}
                  url={book.url}
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

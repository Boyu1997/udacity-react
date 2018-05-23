import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
  static propTypes = {
    onUpdateShelf: PropTypes.func.isRequired
  }
  state = {
    query : '',
    books: []
  }
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    if (query.trim() === "") {
      this.setState({ books: [] })
    }
    else {
      BooksAPI.search(query.trim()).then((books) => {
        if (books === undefined || books.error === "empty query") {
          books = []
        }
        this.setState({ books })
      })
    }
  }
  render () {
    this.state.books.map((book) => {
      if (book.imageLinks === undefined) {
        book.url = "N/A"
      }
      else {
        book.url = book.imageLinks.smallThumbnail
      }
    })

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" />
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          {this.state.books.length !== 0 && (
            <ol className="books-grid">
              {this.state.books.map((book) => (
                <li key={book.id}>
                  <Book id={book.id}
                    title={book.title}
                    author={book.authors}
                    url={book.url}
                    shelf={book.shelf}
                    onUpdateShelf={this.props.onUpdateShelf}
                  />
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    )
  }
}

export default SearchBooks

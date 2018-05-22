import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
  state = {
    query : '',
    books: []
  }
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    BooksAPI.search(query.trim()).then((books) => {
      this.setState({ books })
    })
  }
  render () {
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
          <ol className="books-grid">
            {this.state.books.map((book) => (
              <li key={book.title}>
                <Book title={book.title}
                  author={book.authors}
                  url={book.imageLinks.smallThumbnail}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks

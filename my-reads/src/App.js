import React from 'react'
import { Route, Link } from 'react-router-dom'
import ListBooks from './ListBooks.js'
import SearchBooks from './SearchBooks.js'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchBooks />
        )}/>

        <Route exact path="/" render={() => (
          <div className="list-books">

            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
                <ListBooks books={this.state.books.filter((b) => b.shelf === "currentlyReading")}
                  shelfTitle="Currently Reading"
                />
                <ListBooks books={this.state.books.filter((b) => b.shelf === "wantToRead")}
                  shelfTitle="Want to Read"
                />
                <ListBooks books={this.state.books.filter((b) => b.shelf === "read")}
                  shelfTitle="Read"
                />
              </div>
            </div>

            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>

      )}/>


      </div>
    )
  }
}

export default BooksApp

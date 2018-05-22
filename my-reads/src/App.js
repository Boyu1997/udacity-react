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
  updateShelf = (id, shelf) => {
    BooksAPI.update({id: id}, shelf)
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchBooks onUpdateShelf={this.updateShelf}/>
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
                  onUpdateShelf={this.updateShelf}
                />
                <ListBooks books={this.state.books.filter((b) => b.shelf === "wantToRead")}
                  shelfTitle="Want to Read"
                  onUpdateShelf={this.updateShelf}
                />
                <ListBooks books={this.state.books.filter((b) => b.shelf === "read")}
                  shelfTitle="Read"
                  onUpdateShelf={this.updateShelf}
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

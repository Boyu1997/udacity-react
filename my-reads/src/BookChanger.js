import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI.js'

class BookChanger extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    shelf: PropTypes.string,
    onUpdateShelf: PropTypes.func.isRequired
  }
  state = {
    shelf: ""
  }
  componentDidMount() {
    if (this.props.shelf === undefined) {
      this.setState({ shelf: "none"})
      BooksAPI.getAll().then((books) => {
        books.map((book) => {
          if (book.id === this.props.id) {
            this.setState({ shelf: book.shelf })
          }
        })
      })
    }
    else {
      this.setState({ shelf: this.props.shelf })
    }
  }
  render () {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.shelf}
          onChange={(event) => this.props.onUpdateShelf(this.props.id, event.target.value)}>
          <option value="disabled" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookChanger

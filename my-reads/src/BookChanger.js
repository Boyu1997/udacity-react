import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI.js'

class BookChanger extends Component {
  static propTypes = {
    shelf: PropTypes.string.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  }
  state = {
    shelf: this.props.shelf
  }
  render () {
    return (
      <div className="book-shelf-changer">
        <select onChange={(event) => this.props.onUpdateShelf(this.props.id, event.target.value)}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading" selected={this.state.shelf === "currentlyReading"}>Currently Reading</option>
          <option value="wantToRead" selected={this.state.shelf === "wantToRead"}>Want to Read</option>
          <option value="read" selected={this.state.shelf === "read"}>Read</option>
          <option value="none" selected={this.state.shelf === undefined}>None</option>
        </select>
      </div>
    )
  }
}

export default BookChanger

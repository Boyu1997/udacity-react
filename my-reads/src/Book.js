import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookChanger from './BookChanger.js'

class Book extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.array.isRequired,
    url: PropTypes.string.isRequired,
    shelf: PropTypes.string,
    onUpdateShelf: PropTypes.func.isRequired
  }
  render () {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.url})` }}></div>
          <BookChanger id={this.props.id}
            shelf={this.props.shelf}
            onUpdateShelf={this.props.onUpdateShelf}
          />
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.author}</div>
      </div>
    )
  }
}

export default Book

import React, { Component } from 'react'
import BookChanger from './BookChanger.js'

class Book extends Component {
  state = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  }
  render () {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
          <BookChanger />
        </div>
        <div className="book-title">{this.state.title}</div>
        <div className="book-authors">{this.state.author}</div>
      </div>
    )
  }
}

export default Book

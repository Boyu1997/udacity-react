import React, { Component } from 'react'

class ListContacts extends Component {
  render() {
    return (
      <ol className='contact-list'>
        {this.props.contacts.map( (contact) => (
          <li key={contact.id} className='contact-list-item'>
            {contact.name}
          </li>
        ))}
      </ol>
    )
  }
}

export default ListContacts

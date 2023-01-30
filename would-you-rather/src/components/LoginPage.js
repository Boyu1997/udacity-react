import React from 'react'
import { connect } from 'react-redux'

import { handleAuthedUserLogin } from '../actions/shared'


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authedUser: '' };

    this.handleAuthUserChange = this.handleAuthUserChange.bind(this);
  }

  handleAuthUserChange(event) {
    this.setState({ authedUser: event.target.value });
  }

  render() {
    const { users } = this.props

    return (
      <div className='body-container login-page-container'>
        <div className='login-card-container'>
          <div className='login-page-header'>Login</div>
          <hr />
          <div className='login-page-body'>
            <div>Please select from users:</div>
            <select
              className='login-select'
              onChange={this.handleAuthUserChange}
              defaultValue=''
            >
              <option disabled value=''> -- select an user -- </option>
              {Object.keys(users).map((userId) => (
                <option key={userId} value={userId}>{userId}</option>
              ))}
            </select>
            <div
              className='generic-button'
              onClick={ () => {
                if (this.state.authedUser === '') {
                  window.alert('Invalid input, please select an user.')
                }
                else {
                  this.props.dispatch(handleAuthedUserLogin(this.state.authedUser))
                }
               }}
            >Submit</div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({
  users: state.users
}))(LoginPage)
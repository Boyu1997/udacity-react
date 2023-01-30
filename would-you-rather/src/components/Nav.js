import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { handleAuthedUserLogout } from '../actions/shared'
import { withRouter } from '../helpers'


class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { authedUser, users } = this.props;
    
    return (
      <div className='nav-bar-container'>
        <div className='nav-bar'>
          <Link to='/' className='nav-bar-option'>Questions</Link>
          <Link to='/add' className='nav-bar-option'>New Question</Link>
          <Link to='/leaderboard' className='nav-bar-option'>Leader Board</Link>
          <div
            className='nav-bar-option nav-bar-login'
            onClick={() => {
              this.props.dispatch(handleAuthedUserLogout())
              this.props.router.navigate('/')
            }}
          >
            <img src={users[authedUser].avatarURL} alt={users[authedUser].id}></img>
            Logout
          </div>
        </div>
    </div>
    )
  }
}

export default withRouter(connect((state) => ({
  authedUser: state.authedUser,
  users: state.users
}))(Nav))
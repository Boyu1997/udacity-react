import React from 'react'
import { connect } from 'react-redux'
import { Routes, Route, redirect } from 'react-router-dom'

import { handleInitialData } from '../actions/shared'

import ConnectedLoginPage from './LoginPage'
import ConnectedNav from './Nav'
import ConnectedCreateQuestionPage from './CreateQuestionPage'
import ConnectedHomePage from './HomePage'
import ConnectedQuestionPage from './QuestionPage'
import LeaderBoardPage from './LeaderBoardPage'

import './App.css'


class App extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {
    if (this.props.loading === true) {
      return <h3>Loading</h3>
    }

    if (this.props.authedUser === '') {
      return <ConnectedLoginPage />
    }

    return (
      <div>
        <ConnectedNav />
        <Routes>
          <Route path='/' element={<ConnectedHomePage />} />
          <Route path='/question/:questionId' element={<ConnectedQuestionPage />} />
          <Route path='/add' element={<ConnectedCreateQuestionPage />} />
          <Route path='/leaderboard' element={<LeaderBoardPage users={this.props.users} />} />
        </Routes>        
      </div>
    )
  }
}

export default connect((state) => ({
  authedUser: state.authedUser,
  loading: state.loading,
  users: state.users
}))(App)

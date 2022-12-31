import React from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import ConnectedQuestions from './Questions'

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

    return (
      <div>
        <h1>would-you-rather</h1>
        
        <ConnectedQuestions />
      </div>
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)

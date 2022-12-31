import React from 'react'
import { connect } from 'react-redux'

import QuestionsList from './QuestionsList'

class Questions extends React.Component {
  render() {
    return (
      <div>
        <QuestionsList questions={this.props.questions} users={this.props.users}/>
      </div>
    )
  }
}

export default connect((state) => ({
  questions: state.questions,
  users: state.users
}))(Questions)
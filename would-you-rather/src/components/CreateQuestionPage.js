

import React from 'react'
import { connect } from 'react-redux'

import { handleCreateQuestion } from '../actions/shared'
import { withRouter } from '../helpers'

class CreateQuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionOne: '',
      optionTwo: ''
    };

    this.handleChangeOptionOne = this.handleChangeOptionOne.bind(this);
    this.handleChangeOptionTwo = this.handleChangeOptionTwo.bind(this);
  }

  handleChangeOptionOne(event) {
    this.setState({optionOne: event.target.value});
  }
  handleChangeOptionTwo(event) {
    this.setState({optionTwo: event.target.value});
  }
  handleSubmit() {
    
  }

  render() {
    const { authedUser } = this.props

    return (
      <div className='body-container'>
      <div className='create-question-container'>
        <div className='create-question-header'>Create New Question</div>
        <hr />
        <div className='create-question-body'>
          <div>Would you rather:</div>
          <input
            className='create-question-input'
            value={this.state.optionOne}
            onChange={this.handleChangeOptionOne}
          ></input>
          <div>OR</div>
          <input
            className='create-question-input'
            value={this.state.optionTwo}
            onChange={this.handleChangeOptionTwo}
          ></input>
          <div
            className='create-question-submit'
            onClick={() => {
              if (this.state.optionOne === '' || this.state.optionTwoTwo === '') {
                window.alert('Invalid input, please entry options before submiting.')
              }
              else {
                this.props.dispatch(handleCreateQuestion(authedUser, this.state.optionOne, this.state.optionTwo))
                this.props.router.navigate('/')
              }
            }}
          >Submit</div>
        </div>
      </div>
    </div>
    )
  }
}

export default withRouter(connect((state) => ({
  authedUser: state.authedUser
}))(CreateQuestionPage))
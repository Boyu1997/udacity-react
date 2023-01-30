import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { handleAddAnswer } from '../actions/shared'
import { withRouter } from '../helpers'


class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: '' };
  }

  render() {
    const { authedUser, questions, users } = this.props
    const { questionId } = this.props.router.params

    return (
      <div className='question-card'>
        <div className='question-header'>Asked by {questions[questionId]['author']}</div>
        <div className='question-body'>
          <div className='question-body-left'>
            <img src={users[questions[questionId]['author']]['avatarURL']} alt={questions[questionId]['author']}></img>
          </div>
          <div className='question-body-right'>
            {questionId in users[authedUser]['answers'] ? (
              <Fragment>
                <div className='question-body-header'>Result:</div>
                <div 
                  className={questions[questionId]['optionOne']['votes'].includes(authedUser) ? 
                    'question-option-selected' : 'question-option'}
                >
                  {questions[questionId]['optionOne']['text']}
                  {questions[questionId]['optionOne']['votes'].includes(authedUser) && (<strong> (your choice)</strong>)}
                  <div className='progress-bar'>
                    <div 
                      style={{ width: `${
                        100 * questions[questionId]['optionOne']['votes'].length /
                        (questions[questionId]['optionOne']['votes'].length + questions[questionId]['optionTwo']['votes'].length)
                      }%` }}
                    >
                      {`${
                        Math.round(100 * questions[questionId]['optionOne']['votes'].length /
                        (questions[questionId]['optionOne']['votes'].length + questions[questionId]['optionTwo']['votes'].length))
                      }%`}
                    </div>
                  </div>
                </div>
                <div
                  className={questions[questionId]['optionTwo']['votes'].includes(authedUser) ? 
                    'question-option-selected' : 'question-option'}
                >
                  {questions[questionId]['optionTwo']['text']}
                  {questions[questionId]['optionTwo']['votes'].includes(authedUser) && (<strong> (your choice)</strong>)}
                  <div className='progress-bar'>
                    <div 
                      style={{ width: `${
                        100 * questions[questionId]['optionTwo']['votes'].length /
                        (questions[questionId]['optionOne']['votes'].length + questions[questionId]['optionTwo']['votes'].length)
                      }%` }}
                    >
                      {`${
                        Math.round(100 * questions[questionId]['optionTwo']['votes'].length /
                        (questions[questionId]['optionOne']['votes'].length + questions[questionId]['optionTwo']['votes'].length))
                      }%`}
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div className='question-body-header'>Would you rather:</div>
                <div>
                  <input
                    type='radio'
                    id='optionOne'
                    onClick={() => {
                      document.getElementById('optionTwo').checked = false
                      this.setState({ selectedOption: 'optionOne' })
                    }}
                  />
                  {questions[questionId]['optionOne']['text']}
                </div>
                <div>
                  <input
                    type='radio'
                    id='optionTwo'
                    onClick={() => {
                      document.getElementById('optionOne').checked = false
                      this.setState({ selectedOption: 'optionTwo' })
                    }}
                  />
                  {questions[questionId]['optionTwo']['text']}
                </div>
                <div
                  className='generic-button'
                  onClick={() => {
                    if (this.state.selectedOption === '') {
                      window.alert('No option selected, please choose one before submiting.')
                    }
                    else {
                      this.props.dispatch(handleAddAnswer(authedUser, questionId, this.state.selectedOption))
                    }
                  }}
                >
                  Submit
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connect((state) => ({
  authedUser: state.authedUser,
  questions: state.questions,
  users: state.users
}))(QuestionPage))
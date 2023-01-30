import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showQuestions: 'ANSWERED_QUESTIONS' };
  }

  render() {
    const { authedUser, questions, users } = this.props

    return (
      <div className='body-container'>
        <div className='home-nav-button-container'>
          <div
            className={`home-nav-button ${this.state.showQuestions === 'ANSWERED_QUESTIONS' && 'button-selected'}`}
            onClick={() => { this.setState({ showQuestions: 'ANSWERED_QUESTIONS' }) }}
          >
            Answered Questions
          </div>
        </div>
        <div className='home-nav-button-container'>
          <div
            className={`home-nav-button ${this.state.showQuestions === 'UNANSWERED_QUESTIONS' && 'button-selected'}`}
            onClick={() => { this.setState({ showQuestions: 'UNANSWERED_QUESTIONS' }) }}
          >
            Unanswered Questions
          </div>
        </div>
        {Object.keys(questions).map((questionId) => (
          (
            (
              this.state.showQuestions === 'ANSWERED_QUESTIONS' &&
              questionId in users[authedUser]['answers']
            ) || (
              this.state.showQuestions === 'UNANSWERED_QUESTIONS' &&
              !(questionId in users[authedUser]['answers'])
            )
          ) && (
            <div key={questionId} className='question-card'>
              <div className='question-header'>
                Question by {questions[questionId]['author']}:
              </div>
              
              <div className='question-body'>
                <div className='question-body-left'>
                  <img src={users[questions[questionId]['author']]['avatarURL']} alt={questions[questionId]['author']}></img>
                </div>

                <div className='question-body-right'>
                  <div className='question-body-header'>Would you rather:</div>
                  <div className='question-body-text'>
                    {questions[questionId]['optionOne']['text']} <strong>or</strong> {questions[questionId]['optionTwo']['text']}
                  </div>
                  <Link 
                    className='generic-button'
                    to={`/question/${questionId}`}>
                    View Question
                  </Link>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    )
  }
}

export default connect((state) => ({
  authedUser: state.authedUser,
  questions: state.questions,
  users: state.users
}))(HomePage)
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showQuestions: 'UNANSWERED_QUESTIONS' };
  }

  render() {
    const { authedUser, questions, users } = this.props

    return (
      <div className='body-container'>
        <div className='home-nav-button-container'>
          <div
            className={`home-nav-button ${this.state.showQuestions === 'UNANSWERED_QUESTIONS' && 'button-selected'}`}
            onClick={() => { this.setState({ showQuestions: 'UNANSWERED_QUESTIONS' }) }}
          >
            Unanswered Questions
          </div>
        </div>
        <div className='home-nav-button-container'>
          <div
            className={`home-nav-button ${this.state.showQuestions === 'ANSWERED_QUESTIONS' && 'button-selected'}`}
            onClick={() => { this.setState({ showQuestions: 'ANSWERED_QUESTIONS' }) }}
          >
            Answered Questions
          </div>
        </div>
        {Object.values(questions)
          .sort((a, b) => a.timestamp < b.timestamp ? 1 : -1)
          .map((question) => (
            (
              (
                this.state.showQuestions === 'ANSWERED_QUESTIONS' &&
                question.id in users[authedUser].answers
              ) || (
                this.state.showQuestions === 'UNANSWERED_QUESTIONS' &&
                !(question.id in users[authedUser].answers)
              )
            ) && (
              <div key={question.id} className='question-card'>
                <div className='question-header'>
                  Question by {question.author}:
                </div>
                
                <div className='question-body'>
                  <div className='question-body-left'>
                    <img src={users[question.author].avatarURL} alt={question.author}></img>
                  </div>

                  <div className='question-body-right'>
                    <div className='question-body-header'>Would you rather:</div>
                    <div className='question-body-text'>
                      {question.optionOne.text} <strong>or</strong> {question.optionTwo.text}
                    </div>
                    <Link 
                      className='generic-button'
                      to={`/question/${question.id}`}>
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
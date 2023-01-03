import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  render() {
    const { questions, users } = this.props

    return (
      <div>
        {Object.keys(questions).map((key) => (
          <div key={key} className='question-card'>
            <div className='question-header'>
              Question by {questions[key]['author']}:
            </div>
            
            <div className='question-body'>
              <div className='question-body-left'>
                <img src={users[questions[key]['author']]['avatarURL']} alt={questions[key]['author']}></img>
              </div>

              <div className='question-body-right'>
                <div className='question-body-header'>Would you rather</div>
                <div className='question-body-text'>
                  {questions[key]['optionOne']['text']} or {questions[key]['optionTwo']['text']}
                </div>
                <Link 
                  className='question-body-button'
                  to={`/question/${key}`}>
                  View Question
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default connect((state) => ({
  questions: state.questions,
  users: state.users
}))(HomePage)
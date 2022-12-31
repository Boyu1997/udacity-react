import React from 'react'

export default function QuestionsList (props) {
  return (
    Object.keys(props.questions).map((key) => (
      <div key={key} className='question-card'>
        <div className='question-header'>
          Question by {props.questions[key]['author']}:
        </div>
        
        <div className='question-body'>
          <div className='question-body-left'>
            <img src={props.users[props.questions[key]['author']]['avatarURL']} alt={props.questions[key]['author']}></img>
          </div>

          <div className='question-body-right'>
            <div className='question-body-header'>Would you rather</div>
            <div className='question-body-text'>
              {props.questions[key]['optionOne']['text']} or {props.questions[key]['optionTwo']['text']}
            </div>
            <div 
              className='question-body-button'
              onClick={() => console.log(key)}>
              View Question
            </div>
          </div>
        </div>
      </div>
    ))
  )
}
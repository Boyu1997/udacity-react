import { _getQuestions, _getUsers, _saveQuestionAnswer } from './_DATA.js'
import { addQuestionAnswer } from './questions.js'
import { addUserAnswer } from './users.js'

export const RECEIVE_DATA = 'RECEIVE_DATA'


function receiveData (questions, users) {
  return {
    type: RECEIVE_DATA,
    questions,
    users,
  }
}

export function handleInitialData () {
  return (dispatch) => {
    return Promise.all([
      _getQuestions(),
      _getUsers()
    ]).then(([ questions, users ]) => {
      dispatch(receiveData(questions, users))
    })
  }
}

export function handleAddAnswer (authedUser, questionId, selectedOption) {
  return (dispatch) => {
    return _saveQuestionAnswer({
      'authedUser': authedUser,
      'qid': questionId,
      'answer': selectedOption})
    .then(() => {
        dispatch(addQuestionAnswer(authedUser, questionId, selectedOption))
        dispatch(addUserAnswer(authedUser, questionId, selectedOption))
    })
    .catch(() => {
      alert('An error occurred, please try again.')
    })
  }
}
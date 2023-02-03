import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from './_DATA.js'
import { questionsAddAnswer, questionsCreateQuestion } from './questions.js'
import { usersAddAnswer, usersCreateQuestion } from './users.js'

export const RECEIVE_DATA = 'RECEIVE_DATA'
export const AUTHED_USER_LOGOUT = 'AUTHED_USER_LOGOUT'
export const AUTHED_USER_LOGIN = 'AUTHED_USER_LOGIN'


function receiveData (questions, users) {
  return {
    type: RECEIVE_DATA,
    questions,
    users
  }
}

function authedUserLogout () {
  return {
    type: AUTHED_USER_LOGOUT
  }
}

function authedUserLogin (authedUser) {
  return {
    type: AUTHED_USER_LOGIN,
    authedUser
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
        dispatch(questionsAddAnswer(authedUser, questionId, selectedOption))
        dispatch(usersAddAnswer(authedUser, questionId, selectedOption))
    })
    .catch(() => {
      alert('An error occurred, please try again.')
    })
  }
}

export function handleCreateQuestion (authedUser, optionOne, optionTwo) {
  return (dispatch) => {
    return _saveQuestion({
      'author': authedUser,
      'optionOneText': optionOne,
      'optionTwoText': optionTwo})
    .then((question) => {
      dispatch(questionsCreateQuestion(authedUser, question.id, optionOne, optionTwo))
      dispatch(usersCreateQuestion(authedUser, question.id))
    })
    .catch(() => {
      alert('An error occurred, please try again.')
    })
  }
}

export function handleAuthedUserLogout () {
  return (dispatch) => {
    dispatch(authedUserLogout())
  }
}

export function handleAuthedUserLogin (authedUser) {
  return (dispatch) => {
    dispatch(authedUserLogin(authedUser))
  }
}
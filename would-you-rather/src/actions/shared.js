import { _getQuestions, _getUsers } from './_DATA.js'

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
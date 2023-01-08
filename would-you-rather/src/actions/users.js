export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'

export function addUserAnswer (authedUser, questionId, selectedOption) {
  return {
    type: ADD_USER_ANSWER,
    authedUser,
    questionId,
    selectedOption
  }
}
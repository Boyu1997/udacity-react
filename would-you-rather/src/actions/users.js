export const USERS_ADD_ANSWER = 'USERS_ADD_ANSWER'
export const USERS_CREATE_QUESTION = 'USERS_CREATE_QUESTION'

export function usersAddAnswer (authedUser, questionId, selectedOption) {
  return {
    type: USERS_ADD_ANSWER,
    authedUser,
    questionId,
    selectedOption
  }
}

export function usersCreateQuestion (authedUser, questionId) {
  return {
    type: USERS_CREATE_QUESTION,
    authedUser,
    questionId
  }
}
export const QUESTIONS_ADD_ANSWER = 'QUESTIONS_ADD_ANSWER'
export const QUESTIONS_CREATE_QUESTION = 'QUESTIONS_CREATE_QUESTION'

export function questionsAddAnswer (authedUser, questionId, selectedOption) {
  return {
    type: QUESTIONS_ADD_ANSWER,
    authedUser,
    questionId,
    selectedOption
  }
}

export function questionsCreateQuestion (authedUser, questionId, optionOne, optionTwo) {
  return {
    type: QUESTIONS_CREATE_QUESTION,
    questionId,
    authedUser,
    optionOne,
    optionTwo
  }
}
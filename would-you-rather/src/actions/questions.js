export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

export function addQuestionAnswer (authedUser, questionId, selectedOption) {
  return {
    type: ADD_QUESTION_ANSWER,
    authedUser,
    questionId,
    selectedOption
  }
}
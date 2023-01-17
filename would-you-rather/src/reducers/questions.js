import {
  QUESTIONS_ADD_ANSWER,
  QUESTIONS_CREATE_QUESTION
} from '../actions/questions'
import { RECEIVE_DATA } from '../actions/shared'
  
export default function questionsReducer (state = [], action) {
  switch(action.type) {
    case RECEIVE_DATA:
      return action.questions
    case QUESTIONS_ADD_ANSWER:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.selectedOption]: {
            ...state[action.questionId][action.selectedOption],
            votes: state[action.questionId][action.selectedOption].votes.concat([action.authedUser])
          }
        }
      }
    case QUESTIONS_CREATE_QUESTION:
      return {
        ...state,
        [action.questionId]: {
          id: action.questionId,
          author: action.authedUser,
          timestamp: Date.now(),
          optionOne: {
            votes: [],
            text: action.optionOne,
          },
          optionTwo: {
            votes: [],
            text: action.optionTwo
          }
        }
      }
    default:
      return state
  }
}
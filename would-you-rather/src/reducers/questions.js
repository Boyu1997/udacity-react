import {
  ADD_QUESTION_ANSWER
} from '../actions/questions'
import { RECEIVE_DATA } from '../actions/shared'
  
export default function questionsReducer (state = [], action) {
  switch(action.type) {
    case RECEIVE_DATA :
      return action.questions
    case ADD_QUESTION_ANSWER:
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
    default:
      return state
  }
}
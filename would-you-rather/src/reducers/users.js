import {
  USERS_ADD_ANSWER,
  USERS_CREATE_QUESTION
} from '../actions/users'
import { RECEIVE_DATA } from '../actions/shared'
    
export default function usersReducer (state = [], action) {
  switch(action.type) {
    case RECEIVE_DATA :
      return action.users
    case USERS_ADD_ANSWER :
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.questionId]: action.selectedOption
          }
        }
      }
    case USERS_CREATE_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat([action.questionId])
        }
      }
    default:
      return state
  }
}
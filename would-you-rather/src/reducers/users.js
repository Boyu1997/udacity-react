import {
  ADD_USER_ANSWER
} from '../actions/users'
import { RECEIVE_DATA } from '../actions/shared'
    
export default function usersReducer (state = [], action) {
  switch(action.type) {
    case RECEIVE_DATA :
      return action.users
    case ADD_USER_ANSWER :
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
    default:
      return state
  }
}
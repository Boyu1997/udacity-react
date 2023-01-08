import {
  RECEIVE_DATA
} from '../actions/shared'
  
export function loadingReducer (state = true, action) {
  switch(action.type) {
    case RECEIVE_DATA :
      return false
    default :
      return state
  }
}

export function authedUserReducer (state = true, action) {
  switch(action.type) {
    case RECEIVE_DATA :
      return 'sarahedo'
    default :
      return state
  }
}
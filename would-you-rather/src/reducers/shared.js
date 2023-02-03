import {
  RECEIVE_DATA,
  AUTHED_USER_LOGOUT,
  AUTHED_USER_LOGIN
} from '../actions/shared'
  
export function loadingReducer (state = true, action) {
  switch(action.type) {
    case RECEIVE_DATA :
      return false
    default :
      return state
  }
}

export function authedUserReducer (state = '', action) {
  switch(action.type) {
    case RECEIVE_DATA :
      return ''
    case AUTHED_USER_LOGOUT:
      return ''
    case AUTHED_USER_LOGIN:
      return action.authedUser
    default :
      return state
  }
}
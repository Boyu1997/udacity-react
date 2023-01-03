import {
    RECEIVE_DATA
  } from '../actions/shared'
  
  export default function loadingReducer (state = true, action) {
    switch(action.type) {
      case RECEIVE_DATA :
        return false
      default :
        return state
    }
  }
// import React from 'react'
import { FETCH_START, SUCCESS_GET_ARTIKEL, SUCCESS_ADD_ARTIKEL} from "../action/artikelAction"

const initialState = {
  article: [],
  err: null,
  isLoading:false
};

const artikelReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_START:
      return {
        ...state,
        isLoading: true
      }
    case SUCCESS_GET_ARTIKEL:
      return {
        ...state,
        article: action.payload,
        isLoading:false
        
      }
    
    case SUCCESS_ADD_ARTIKEL:
      return {
        article: [...state.article, action.payload],
        isLoading:false
      }
    default:
      return state 
  }
}

export default artikelReducer
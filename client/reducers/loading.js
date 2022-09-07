import { SET_LOADING, SET_CHARACTERS } from '../actions/index'

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return true
    case SET_CHARACTERS:
    default:
      return state
  }
}

export default reducer

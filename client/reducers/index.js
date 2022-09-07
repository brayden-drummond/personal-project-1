import { combineReducers } from 'redux'

import characters from './characters'
import loading from './loading'

export default combineReducers({
  characters,
  loading,
})

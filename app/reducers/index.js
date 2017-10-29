//Redux
import { combineReducers } from 'redux'
//Reducers
import skin from './skin'
import other from './other'

export default combineReducers({
    skin,
    other
})
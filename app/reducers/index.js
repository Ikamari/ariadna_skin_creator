//Redux
import { combineReducers } from 'redux'
//Reducers
import skin from './skin'
import other from './other'
import selectedTextures from './selectedTextures'

export default combineReducers({
    skin,
    other,
    selectedTextures
})
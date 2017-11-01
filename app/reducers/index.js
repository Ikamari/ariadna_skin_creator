//Redux
import { combineReducers } from 'redux'
//Reducers
import skin from './skin'
import other from './other'
import selectedTextures from './selectedTextures'
import textures from './textures'

export default combineReducers({
    skin,
    other,
    selectedTextures,
    textures
})
//Redux
import { combineReducers } from 'redux'
//Reducers
import skin from './skin'
import other from './other'
import selectedTextures from './selectedTextures'
import textures from './textures'
import skinExport from './skinExport'

export default combineReducers({
    skin,
    other,
    selectedTextures,
    textures,
    skinExport
})
//Redux
import { combineReducers } from 'redux'
//Reducers
import skin from './skin'
import other from './other'
import selectedTextures from './selectedTextures'
import loadedTextures from './loadedTextures'
import skinExport from './skinExport'

export default combineReducers({
    skin,
    other,
    selectedTextures,
    loadedTextures,
    skinExport
})
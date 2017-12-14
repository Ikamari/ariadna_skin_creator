const initialState = {
    isLoadingData: false,
    loadedTextures: 0,
    needToLoad: 0,
    checkDataSwitch: false
};

const overseer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADED_TEXTURE" :
            return {...state, loadedTextures: state.loadedTextures + 1};
        case "SET_HOW_MUCH_NEED_TO_LOAD" :
            return {...state, needToLoad: action.payload, loadedTextures: 0};
        case "LOADING_DATA_SWITCH" :
            return {...state, isLoadingData: !state.isLoadingData};
        case "CHECK_DATA_SWITCH" :
            return {...state, checkDataSwitch: !state.checkDataSwitch};
        default:
            return state;
    }
};

export default overseer
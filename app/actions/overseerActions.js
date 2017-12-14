export const checkData = () => ({
    type: "CHECK_DATA_SWITCH"
});

export const loadingData = () => ({
    type: "LOADING_DATA_SWITCH"
});

export const setHowMuchNeedToLoad = (value) => ({
    type: "SET_HOW_MUCH_NEED_TO_LOAD",
    payload: value
});

export const loadedTexture = () => ({
    type: "LOADED_TEXTURE"
});
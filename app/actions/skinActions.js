export const changeSkinFormat = () => ({
    type: "CHANGE_FORMAT"
});

export const changeSkinLayer = () => ({
    type: "CHANGE_LAYER"
});

export const selectSkinPart = (part) => ({
    type: "SELECT_PART",
    payload: part
});

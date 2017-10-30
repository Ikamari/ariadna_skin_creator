export const changeSkinFormat = (format) => ({
    type: "CHANGE_FORMAT",
    payload: !format
});

export const changeSkinLayer = (layer) => ({
    type: "CHANGE_LAYER",
    payload: !layer
});

export const selectSkinPart = (part) => ({
    type: "SELECT_PART",
    payload: part
});


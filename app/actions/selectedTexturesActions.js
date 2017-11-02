export const removeLayerTexture = (part, layer) => ({
    type: "REMOVE_LAYER_TEXTURE",
    payload: {
        "part": part,
        "layer": layer
    }
});

export const selectLayerTexture = (part, layer) => ({
    type: "SELECT_LAYER_TEXTURE",
    payload: {
        "part": part,
        "textureName": layer
    }
});


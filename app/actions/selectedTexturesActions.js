export const removeSkinPart = (part, layer) => ({
    type: "REMOVE_LAYER_TEXTURE",
    payload: {
        "part": part,
        "layer": layer
    }
});
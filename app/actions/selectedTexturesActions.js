export const removeSkinPart = (part, layer) => ({
    type: "REMOVE_TEXTURE",
    payload: {
        "part": part,
        "layer": layer
    }
});
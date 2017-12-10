const initialState = {
    isNewFormat: true,
    selectedPart: "none",
    armorLayer: false,
};

const skin = (state = initialState, action) => {
    switch(action.type) {
        case "CHANGE_FORMAT":
            return {...state, isNewFormat: !state.isNewFormat};
        case "CHANGE_LAYER":
            return {...state, armorLayer: !state.armorLayer};
        case "SELECT_PART":
            return {...state, selectedPart: action.payload};
        default:
            return state
    }
};

export default skin
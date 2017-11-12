const initialState = {
    isNewFormat: true,
    selectedPart: "none",
    armorLayer: false,
};

const skin = (state = initialState, action) => {
    switch(action.type) {
        case "CHANGE_FORMAT":
            return {...state, isNewFormat: action.payload};
        case "CHANGE_LAYER":
            return {...state, armorLayer: action.payload};
        case "SELECT_PART":
            return {...state, selectedPart: action.payload};
        default:
            return state
    }
};

export default skin
const initialState = {
    isNewFormat: false,
    selectedPart: "none",
    armorLayer: false,
};

const skin = (state = initialState, action) => {
    switch(action.type) {
        case "CHANGE_FORMAT":
            return {...state, isNewFormat: action.payload};
        default:
            return state
    }
};

export default skin
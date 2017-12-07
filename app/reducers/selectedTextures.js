const initialState = {
    'head': [null, null],
    'body': [null, null],
    'left-hand': [null, null],
    'right-hand': [null, null],
    'left-leg': [null, null],
    'right-leg': [null, null]
};

const selectedTextures = (state = initialState, action) => {
    switch(action.type){
        case "REMOVE_LAYER_TEXTURE":
            return {...state, [action.payload.part]: action.payload.layer};
        case "SELECT_LAYER_TEXTURE":
            return {...state, [action.payload.part]: action.payload.layer};
        default:
            return state;
    }
};

export default selectedTextures
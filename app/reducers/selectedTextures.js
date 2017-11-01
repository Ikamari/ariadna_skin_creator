const initialState = {
        'head': ["default-head.png", null],
        'body': ["default-body.png", null],
        'left-hand': ["default-hand.png", null],
        'right-hand': ["default-hand.png", null],
        'left-leg': ["default-leg.png", null],
        'right-leg': ["default-leg.png", null]

        // 'head': [null, null],
        // 'body': [null, null],
        // 'left-hand': [null, null],
        // 'right-hand': [null, null],
        // 'left-leg': [null, null],
        // 'right-leg': [null, null]
};

const selectedTextures = (state = initialState, action) => {
    switch(action.type){
        case "REMOVE_TEXTURE":
            return {...state, [action.payload.part]: [null, null]};
        default:
            return state;
    }
};

export default selectedTextures
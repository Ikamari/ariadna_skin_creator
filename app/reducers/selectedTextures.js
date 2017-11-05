const initialState = {
        'head': ["layer_test_head1.png", "layer_test_head2.png"],
        'body': ["layer_test_body1.png", "layer_test_body2.png"],
        'left-hand': ["layer_test_hand1.png", "layer_test_hand2.png"],
        'right-hand': ["layer_test_hand1.png", "layer_test_hand2.png"],
        'left-leg': ["layer_test_leg1.png", "layer_test_leg2.png"],
        'right-leg': ["layer_test_leg1.png", "layer_test_leg2.png"]

        // 'head': [null, null],
        // 'body': [null, null],
        // 'left-hand': [null, null],
        // 'right-hand': [null, null],
        // 'left-leg': [null, null],
        // 'right-leg': [null, null]
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
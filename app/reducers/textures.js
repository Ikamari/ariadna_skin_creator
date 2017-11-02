const initialState = {
    'head': [null],
    'body': [null],
    'hand': [null],
    'leg': [null],
};

const textures = (state = initialState, action) => {
    switch(action.type){
        case "GET_TEXTURES":
            return {...action.payload};
        default:
            return state;
    }
};

export default textures
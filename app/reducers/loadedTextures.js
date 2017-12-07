const initialState = {
};

const textures = (state = initialState, action) => {
    switch(action.type){
        case "LOAD_TEXTURES":
            return {...action.payload};
        default:
            return state;
    }
};

export default textures
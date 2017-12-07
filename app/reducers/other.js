const initialState = {
    version: "0.6",
    isDev: true,
    debug: true
};

const other = (state = initialState, action) => {
    switch (action.type) {
        case "SWITCH_DEBUG" :
            return {...state, debug: !state.debug};
        default:
            return state;
    }
};

export default other
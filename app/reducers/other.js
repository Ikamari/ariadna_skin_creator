const initialState = {
    version: "0.7 - dev 0.8",
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
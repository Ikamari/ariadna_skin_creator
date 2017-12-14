const initialState = {
    version: "0.7.1",
    isDev: true,
    debug: false
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
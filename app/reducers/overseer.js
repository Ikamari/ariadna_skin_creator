const initialState = {
    checkDataSwitch: false
};

const overseer = (state = initialState, action) => {
    switch (action.type) {
        case "CHECK_DATA_SWITCH" :
            return {...state, checkDataSwitch: !state.checkDataSwitch};
        default:
            return state;
    }
};

export default overseer
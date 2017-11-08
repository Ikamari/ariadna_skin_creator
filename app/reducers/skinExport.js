const initialState = {
    exportNeeded: false
};

const skinExport = (state = initialState, action) => {
    switch(action.type){
        case "DO_EXPORT":
            return {...state, exportNeeded: true};
        case "EXPORTED":
            return {...state, exportNeeded: false};
        default:
            return state;
    }
};

export default skinExport;
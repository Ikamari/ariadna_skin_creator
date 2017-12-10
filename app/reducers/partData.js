const initialState = {
    head: [],
    headArmor: [],
    body: [],
    bodyArmor: [],
    hand: [],
    handArmor: [],
    leg: [],
    legArmor: []
};

const partData = (state = initialState, action) => {
    switch (action.type) {
        case "WRITE_PART_DATA": {
            switch(action.payload.part) {
                case "head": {
                    return {...state, head: action.payload.data};
                }
                case "headArmor": {
                    return {...state, headArmor: action.payload.data};
                }
                case "body": {
                    return {...state, body: action.payload.data};
                }
                case "bodyArmor": {
                    return {...state, bodyArmor: action.payload.data};
                }
                case "hand": {
                    return {...state, hand: action.payload.data};
                }
                case "handArmor": {
                    return {...state, handArmor: action.payload.data};
                }
                case "leg": {
                    return {...state, leg: action.payload.data};
                }
                case "legArmor": {
                    return {...state, legArmor: action.payload.data};
                }
                default : {console.log("Got wrong part name while writing part data"); break;}
            } break;
        }
        default:
            return state;
    }
};

export default partData;


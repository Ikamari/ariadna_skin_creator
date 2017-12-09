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
        default:
            return state;
    }
};

export default partData;

// case "head": {
//
//     break;
// }
// case "headArmor": {
//     break;
// }
// case "body": {
//     break;
// }
// case "bodyArmor": {
//     break;
// }
// case "hand": {
//     break;
// }
// case "handArmor": {
//     break;
// }
// case "leg": {
//     break;
// }
// case "legArmor": {
//     break;
// }
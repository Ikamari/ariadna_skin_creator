const initialState = {
    selectedTextures: {
        head: ["default-head", null],
        body: ["default-body", null],
        leftHand: ["default-hand", null],
        rightHand: ["default-hand", null],
        leftLeg: ["default-leg", null],
        rightLeg: ["default-leg", null]
    }
};

const selectedTextures = (state = initialState) => (
    state
);

export default selectedTextures
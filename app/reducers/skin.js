const initialState = {
    isNewVersion: false,
    selectedPart: "none",
    armorLayer: false,
    selectedTextures: {
        head: ["default-head", null],
        body: ["default-body", null],
        leftHand: ["default-hand", null],
        rightHand: ["default-hand", null],
        leftLeg: ["default-leg", null],
        rightLeg: ["default-leg", null]
    }
};

const skin = (state = initialState) => (
    state
);

export default skin
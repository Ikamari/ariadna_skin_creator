const initialState = {
    selectedTextures: {
        'head': ["default-head", null],
        'body': ["default-body", null],
        'left-hand': ["default-hand", null],
        'right-hand': ["default-hand", null],
        'left-leg': ["default-leg", null],
        'right-leg': ["default-leg", null]
    }
};

const selectedTextures = (state = initialState) => (
    state
);

export default selectedTextures
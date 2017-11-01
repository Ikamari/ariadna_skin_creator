const initialState = {
    selectedTextures: {
        'head': ["default-head", null],
        'body': ["default-body", null],
        'left-hand': ["default-hand", null],
        'right-hand': ["default-hand", null],
        'left-leg': ["default-leg", null],
        'right-leg': ["default-leg", null]

        // 'head': [null, null],
        // 'body': [null, null],
        // 'left-hand': [null, null],
        // 'right-hand': [null, null],
        // 'left-leg': [null, null],
        // 'right-leg': [null, null]
    }
};

const selectedTextures = (state = initialState) => (
    state
);

export default selectedTextures
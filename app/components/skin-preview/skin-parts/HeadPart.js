//React
import React from 'react';

export const headPart = (side) => ({
    posX: side === "front" ? 8 : 24,
    posY: 8,
    sWidth: 8,
    sHeight: 8,
    sliceX: 0,
    sliceY: 0,
    dWidth: 80,
    dHeight: 80,
});
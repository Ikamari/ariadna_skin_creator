//React
import React from 'react';

export const bodyPart = (side) => ({
    posX: side === "front" ? 4 : 16,
    posY: 4,
    sWidth: 8,
    sHeight: 12,
    sliceX: 0,
    sliceY: 0,
    dWidth: 80,
    dHeight: 140,
});
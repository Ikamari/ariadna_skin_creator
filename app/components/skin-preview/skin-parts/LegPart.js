//React
import React from 'react';

export const legPart = (side) => ({
    posX: side === "front" ? 4 : 12,
    posY: 4,
    sWidth: 4,
    sHeight: 12,
    sliceX: 0,
    sliceY: 0,
    dWidth: 40,
    dHeight: 140,
});
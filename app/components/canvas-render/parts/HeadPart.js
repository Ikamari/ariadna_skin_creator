//React
import React from 'react';

export const headPart = (side, isPaletteElement = false) => ({
    posX: side === "front" ? 8 : 24,
    posY: 8,
    sWidth: 8,
    sHeight: 8,
    sliceX: 0,
    sliceY: 0,
    dWidth: isPaletteElement ? 40 : 80,
    dHeight: isPaletteElement ? 40 : 80,
});
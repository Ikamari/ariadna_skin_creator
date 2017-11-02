//React
import React from 'react';

export const bodyPart = (side, isPaletteElement = false) => ({
    posX: side === "front" ? 4 : 16,
    posY: 4,
    sWidth: 8,
    sHeight: 12,
    sliceX: 0,
    sliceY: 0,
    dWidth: isPaletteElement ? 40 : 80,
    dHeight: isPaletteElement ? 70 : 140
});
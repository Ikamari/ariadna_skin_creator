//React
import React from 'react';

export const headPart = (side, isPaletteElement = false, isArmor = false) => ({
    posX: side === "front" ? 8 : 24,
    posY: 8,
    sWidth: 8,
    sHeight: 8,
    sliceX: isArmor ? 5 : 0,
    sliceY: isArmor ? 15 : 0,
    dWidth: isPaletteElement ? 40 : 80,
    dHeight: isPaletteElement ? 40 : 80,
});
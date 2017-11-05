//React
import React from 'react';

export const bodyPart = (side, isPaletteElement = false, isArmor = false) => ({
    posX: side === "front" ? 4 : 16,
    posY: 4,
    sWidth: 8,
    sHeight: 12,
    sliceX: isArmor ? 5 : 0,
    sliceY: isArmor ? -7 : 0,
    dWidth: isPaletteElement ? 40 : 80,
    dHeight: isPaletteElement ? 70 : 140
});
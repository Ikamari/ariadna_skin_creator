//React
import React from 'react';

export const handPart = (side, isPaletteElement = false, isArmor = false) => ({
    posX: side === "front" ? 4 : 12,
    posY: 4,
    sWidth: 4,
    sHeight: 12,
    sliceX: isArmor ? 10 : 0,
    sliceY: isArmor ? 6 : 0,
    dWidth: isPaletteElement ? 20 : 40,
    dHeight: isPaletteElement ? 70 : 140,
});
//React
import React from "react"
//Helpers
import simplifyPartName from "./simplifyPartName"

const getMaxScale = (textureData, selectedTextures) => {
    let maxScale = 0;

    Object.keys(selectedTextures).map((value) => {
        const partTextures = selectedTextures[value];
        if(partTextures[0] !== null) {
            maxScale = textureData[simplifyPartName(value)][partTextures[0]].scale > maxScale ?
                textureData[simplifyPartName(value)][partTextures[0]].scale : maxScale
        }

        if(partTextures[1] !== null) {
            maxScale = textureData[simplifyPartName(value)][partTextures[1]].scale > maxScale ?
                textureData[simplifyPartName(value)][partTextures[1]].scale : maxScale
        }
    });

    return maxScale;
};

export default getMaxScale;

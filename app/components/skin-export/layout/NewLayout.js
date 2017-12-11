//React
import React from "react"
//Coordinates
import { coordinates } from "./PartCoordinates"
//Helpers
import simplifyPartName from '../../../helpers/simplifyPartName';

export const drawNewLayout = (canvasElement, selectedTextures, textures, maxScale) => {
    let context = canvasElement.getContext('2d');

    const drawTexture = (simplifiedPartName, texture, skinPart) => {
        console.log(simplifiedPartName, texture, skinPart);
        let partTexture = new Image();
        partTexture.onload = () => {
            context.drawImage(
                partTexture,
                coordinates[skinPart][0] * Math.pow(2, maxScale),
                coordinates[skinPart][1] * Math.pow(2, maxScale),
                texture.width * Math.pow(2, maxScale - texture.scale),
                texture.height * Math.pow(2, maxScale - texture.scale)
            );
        };
        partTexture.src = texture.path;
    };

    context.canvas.width  = 64 * Math.pow(2, maxScale);
    context.canvas.height = 64 * Math.pow(2, maxScale);
    context.imageSmoothingEnabled = false;

    Object.keys(selectedTextures).map((key) => {
        selectedTextures[key][0] !== null ?
            drawTexture(
            simplifyPartName(key),
            textures[simplifyPartName(key)][selectedTextures[key][0]],
            key
        ) : undefined;
        selectedTextures[key][1] !== null ?
        drawTexture(
            simplifyPartName(key),
            textures[simplifyPartName(key)][selectedTextures[key][1]],
            key + "-armor"
        ) : undefined;
    })
};

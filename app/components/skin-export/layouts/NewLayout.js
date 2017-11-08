//React
import React from "react"
//Coordinates
import { coordinates } from "./PartCoordinates"

export const drawNewLayout = (canvasElement, textures) => {
    let context = canvasElement.getContext('2d');

    const simplifyPartName = (partName) => {
        return partName.includes("left-") ? partName.slice(5) : partName.includes("right-") ? partName.slice(6) : partName;
    };

    const drawTexture = (simplifiedPartName, textureName, skinPart) => {
        let partTexture = new Image();
        partTexture.onload = () => {
            context.drawImage(
                partTexture,
                coordinates[skinPart][0],
                coordinates[skinPart][1]
            );
        };
        partTexture.src = 'img/' + simplifiedPartName + '/' + textureName;
    };

    context.canvas.width  = 64;
    context.canvas.height = 64;
    context.imageSmoothingEnabled = false;

    Object.keys(textures).map((key) => {
        drawTexture(
            simplifyPartName(key),
            textures[key][0],
            key
        );
        drawTexture(
            simplifyPartName(key),
            textures[key][1],
            key + "-armor"
        );
    })
};

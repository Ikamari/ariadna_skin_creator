//React
import React from "react"
//Coordinates
import { coordinates } from "./PartCoordinates"

export const drawOldLayout = (canvasElement, textures) => {
    let context = canvasElement.getContext('2d');

    const simplifyPartName = (partName) => {
        return partName.includes("left-") ? partName.slice(5) : partName.includes("right-") ? partName.slice(6) : partName;
    };

    const drawTexture = (simplifiedPartName, texturePath, skinPart) => {
        console.log(simplifiedPartName, texturePath, skinPart);
        let partTexture = new Image();
        partTexture.onload = () => {
            context.drawImage(
                partTexture,
                coordinates[skinPart][0],
                coordinates[skinPart][1]
            );
        };
        partTexture.src = texturePath;
    };

    context.canvas.width  = 64;
    context.canvas.height = 32;
    context.imageSmoothingEnabled = false;

    Object.keys(textures).map((key) => {
        textures[key][0] ?
            drawTexture(
                simplifyPartName(key),
                textures[key][0],
                key
            ) : undefined;
    });

    textures["head"][1] ?
        drawTexture(
            "head",
            textures["head"][1],
            "head-armor"
        ) : undefined;
};
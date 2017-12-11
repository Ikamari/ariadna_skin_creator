//React
import React from "react"
//Coordinates
import { coordinates } from "./PartCoordinates"
//Conversion
import convert from "../TextureConversion"
//Helpers
import simplifyPartName from '../../../helpers/simplifyPartName';

export const drawNewLayout = (canvasElement, selectedTextures, textures, maxScale, converters) => {
    let context = canvasElement.getContext('2d');

    const drawTexture = (simplifiedPartName, texture, skinPart) => {

        const drawConverted = (converter) => {
            context.drawImage(
                converter,
                coordinates[skinPart][0] * Math.pow(2, maxScale),
                coordinates[skinPart][1] * Math.pow(2, maxScale),
                texture.width * Math.pow(2, maxScale - texture.scale),
                texture.height * Math.pow(2, maxScale - texture.scale)
            );
        };

        switch(skinPart) {
            case "left-hand":
                {convert(texture, converters[0], () => drawConverted(converters[0])); return}
            case "left-hand-armor":
                {convert(texture, converters[1], () => drawConverted(converters[1]), true); return}
            case "left-leg":
                {convert(texture, converters[2], () => drawConverted(converters[2])); return}
            case "left-leg-armor":
                {convert(texture, converters[3], () => drawConverted(converters[3]), true); return}
        }

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
            textures[simplifyPartName(key) + "Armor"][selectedTextures[key][1]],
            key + "-armor"
        ) : undefined;
    })
};

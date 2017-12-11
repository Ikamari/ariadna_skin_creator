//React
import React from "react"
//Coordinates
import { coordinates } from "./PartCoordinates"
//Conversion
import convert from "../TextureConversion"
//Helpers
import simplifyPartName from '../../../helpers/simplifyPartName';

export const drawNewLayout = (canvasElement, selectedTextures, textures, maxScale, converter1, converter2) => {
    let context = canvasElement.getContext('2d');

    const drawTexture = (simplifiedPartName, texture, skinPart) => {
        console.log(simplifiedPartName, texture, skinPart);

        if(skinPart === "left-hand") {
            convert(texture, converter1, () => {
                context.drawImage(
                    converter1,
                    coordinates[skinPart][0] * Math.pow(2, maxScale),
                    coordinates[skinPart][1] * Math.pow(2, maxScale),
                    texture.width * Math.pow(2, maxScale - texture.scale),
                    texture.height * Math.pow(2, maxScale - texture.scale)
                );
            });
            return;
        }
        else if(skinPart === "left-leg") {
            convert(texture, converter2, () => {
                context.drawImage(
                    converter2,
                    coordinates[skinPart][0] * Math.pow(2, maxScale),
                    coordinates[skinPart][1] * Math.pow(2, maxScale),
                    texture.width * Math.pow(2, maxScale - texture.scale),
                    texture.height * Math.pow(2, maxScale - texture.scale)
                );
            });
            return;
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

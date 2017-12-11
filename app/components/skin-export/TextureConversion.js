//React
import React from "react"

export const coordinates = {
    "top":             [ [4,  0], [12,  4 ] ], // x and y on canvas (and skin too)
    "inside":          [ [0,  4], [ 4, 16 ] ],
    "outside":         [ [8,  4], [12, 16 ] ],
    "front":           [ [4,  4], [ 8, 16 ] ],
    "back":            [ [12, 4], [16, 16 ] ]
};

const convertTexture = (texture, canvasElement, renderOnLayout, isArmor = false) => {

    const drawTexture = (topLeft, bottomRight, to, next = () => {}, last = false) => {

        let context = canvasElement.getContext('2d');
        context.imageSmoothingEnabled = false;

        let partTexture = new Image();
        partTexture.onload = () => {
            context.drawImage(
                partTexture,
                topLeft[0] * Math.pow(2, texture.scale),
                topLeft[1] * Math.pow(2, texture.scale),
                (bottomRight[0] - topLeft[0]) * Math.pow(2, texture.scale),
                (bottomRight[1] - topLeft[1]) * Math.pow(2, texture.scale),
                to[0] * Math.pow(2, texture.scale),
                to[1] * Math.pow(2, texture.scale),
                (bottomRight[0] - topLeft[0]) * Math.pow(2, texture.scale),
                (bottomRight[1] - topLeft[1]) * Math.pow(2, texture.scale)
            );

            last ?
                renderOnLayout() : next()
        };
        partTexture.src = texture.path;
    };

    canvasElement.width  = 16 * Math.pow(2, texture.scale);
    canvasElement.height = 16 * Math.pow(2, texture.scale);

    drawTexture(coordinates["top"][0], coordinates["top"][1], coordinates["top"][0],
        drawTexture(coordinates["front"][0], coordinates["front"][1], coordinates["back"][0],
            drawTexture(coordinates["back"][0], coordinates["back"][1], coordinates["front"][0],
                drawTexture(coordinates["inside"][0], coordinates["inside"][1], coordinates["outside"][0],
                    drawTexture(coordinates["outside"][0], coordinates["outside"][1], coordinates["inside"][0]))))
    , true);

};

export default convertTexture
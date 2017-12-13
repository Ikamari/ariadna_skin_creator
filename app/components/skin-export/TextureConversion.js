//React
import React from "react"

export const coordinates = {
    "topLeft":         [ [4,  0], [8,  4 ] ],
    "topRight":        [ [8,  0], [12,  4 ] ],// x and y on canvas (and skin too)
    "left":            [ [0,  4], [ 4, 16 ] ],
    "right":           [ [8,  4], [12, 16 ] ],
    "front":           [ [4,  4], [ 8, 16 ] ],
    "back":            [ [12, 4], [16, 16 ] ]
};

const convertTexture = (texture, canvasElement, renderOnLayout, isArmor = false) => {

    const drawTexture = (topLeft, bottomRight, to, next = () => {}, last = false) => {

        let partTexture = new Image();
        partTexture.onload = () => {
            context.drawImage(
                partTexture,
                topLeft[0] * Math.pow(2, texture.scale),
                topLeft[1] * Math.pow(2, texture.scale),
                (bottomRight[0] - topLeft[0]) * Math.pow(2, texture.scale),
                (bottomRight[1] - topLeft[1]) * Math.pow(2, texture.scale),
                (to[0] + 4) * Math.pow(2, texture.scale) * -1,
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

    let context = canvasElement.getContext('2d');
    context.imageSmoothingEnabled = false;
    context.save();
    context.scale(-1,1);

    drawTexture(coordinates["topLeft"][0], coordinates["topLeft"][1], coordinates["topLeft"][0],
        drawTexture(coordinates["topRight"][0], coordinates["topRight"][1], coordinates["topRight"][0],
            drawTexture(coordinates["front"][0], coordinates["front"][1], coordinates["front"][0],
                drawTexture(coordinates["back"][0], coordinates["back"][1], coordinates["back"][0],
                    drawTexture(coordinates["left"][0], coordinates["left"][1], coordinates["right"][0],
                        drawTexture(coordinates["right"][0], coordinates["right"][1], coordinates["left"][0])
                    )
                )
            )
        )
    , true);

};

export default convertTexture
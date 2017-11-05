//React
import React, { Component } from 'react';
//Skin parts
import { headPart } from './parts/HeadPart'
import { bodyPart } from './parts/BodyPart'
import { handPart } from './parts/HandPart'
import { legPart } from './parts/LegPart'

export default class CanvasRender extends Component {
    getCanvasProps(partName) {
        switch(partName) {
            case "head": return headPart("front", true);
            case "body": return bodyPart("front", true);
            case "hand": return handPart("front", true);
            case "leg": return legPart("front", true);
            default: console.log("Woops! You're broke canvas render!")
        }
    }

    drawElement() {
        const { partName, textureName, simplifiedPartName } = this.props;
        const selectedTextures = this.props.selectedTextures;
        const canvasProps = this.getCanvasProps(simplifiedPartName);
        
        let canvasElement = this.refs.renderedElement;
        let context = canvasElement.getContext('2d');
        let elementTexture = new Image();
        context.canvas.width  = canvasProps.dWidth;
        context.canvas.height = canvasProps.dHeight;
        context.imageSmoothingEnabled = false;

        elementTexture.onload = function () {
            context.drawImage(
                elementTexture,
                canvasProps.posX,
                canvasProps.posY,
                canvasProps.sWidth,
                canvasProps.sHeight,
                canvasProps.sliceX,
                canvasProps.sliceY,
                canvasProps.dWidth,
                canvasProps.dHeight
            );
        };
        
        elementTexture.src = 'img/' + simplifiedPartName + '/' + textureName;
    }

    componentDidUpdate(prevProps, prevState) {
        this.drawElement();
    }

    componentDidMount() {
        this.drawElement();
    }

    render() {
        return(
            <div className="paletteElement">
                <canvas ref="renderedElement"/>
            </div>
        )
    }
}
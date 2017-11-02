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
        const { partName, textureName } = this.props;
        const selectedTextures = this.props.selectedTextures;
        const canvasProps = this.getCanvasProps(partName);
        
        let canvasElement = this.refs.renderedElement;
        let context = canvasElement.getContext('2d');
        context.imageSmoothingEnabled = false;
        let elementTexture = new Image();
        context.scale(-1, 1);
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
        
        elementTexture.src = 'img/' + partName + '/' + textureName;
        context.setTransform(1, 0, 0, 1, 0, 0);
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
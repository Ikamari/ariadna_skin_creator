//React
import React, { Component } from 'react';
//Redux
import { connect } from "react-redux"
//Skin parts
import { headPart } from './parts/HeadPart'
import { bodyPart } from './parts/BodyPart'
import { handPart } from './parts/HandPart'
import { legPart } from './parts/LegPart'

class CanvasRender extends Component {
    getCanvasProps(partName) {
        switch(partName) {
            case "head": return headPart("front", true);
            case "body": return bodyPart("front", true);
            case "hand": return handPart("front", true);
            case "leg": return legPart("front", true);
            default: console.log("Woops! You're broke canvas render!")
        }
    }

    drawTexture(texturePath, scale, simplifiedPartName) {
        const canvasProps = this.getCanvasProps(simplifiedPartName);

        let canvasElement = this.refs.renderedElement;
        canvasElement.width  = canvasProps.dWidth;
        canvasElement.height = canvasProps.dHeight;

        let context = canvasElement.getContext('2d');
        context.scale(1 / Math.pow(2, scale), 1 / Math.pow(2, scale));
        context.imageSmoothingEnabled = false;

        let partTexture = new Image();
        partTexture.onload = () => {
            context.drawImage(
                partTexture,
                canvasProps.posX * Math.pow(2, scale),
                canvasProps.posY * Math.pow(2, scale),
                canvasProps.sWidth * Math.pow(2, scale),
                canvasProps.sHeight * Math.pow(2, scale),
                canvasProps.sliceX,
                canvasProps.sliceY,
                canvasProps.dWidth * Math.pow(2, scale),
                canvasProps.dHeight * Math.pow(2, scale)
            );
        };
        partTexture.src = texturePath;
    }


    renderCanvas() {
        const { texturePath, scale, simplifiedPartName } = this.props;
        this.drawTexture(texturePath, scale, simplifiedPartName);
    }

    componentDidUpdate() {
        this.renderCanvas();
    }

    componentDidMount() {
        this.renderCanvas();
    }

    render() {
        return(
            <canvas ref="renderedElement"/>
        )
    }
}

const mapStateToProps = state => ({
    isDev: state.other.isDev
});

export default connect(mapStateToProps)(CanvasRender);
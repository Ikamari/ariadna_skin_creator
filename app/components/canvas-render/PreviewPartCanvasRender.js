//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
//Skin parts
import { headPart } from './parts/HeadPart'
import { bodyPart } from './parts/BodyPart'
import { handPart } from './parts/HandPart'
import { legPart } from './parts/LegPart'
//Helpers
import simplifyPartName from '../../helpers/simplifyPartName';

class CanvasRender extends Component {

    getCanvasProps(simplifiedPartName, side, layer) {
        switch(simplifiedPartName) {
            case "head": return headPart(side, false, layer);
            case "body": return bodyPart(side, false, layer);
            case "hand": return handPart(side, false, layer);
            case "leg": return legPart(side, false, layer);
            default: console.log("Woops! You're broke canvas render!")
        }
    }

    drawTexture(layer, side, partName) {
        const selectedTextures = this.props.selectedTextures;
        const simplifiedPartName = simplifyPartName(partName);
        const textures = this.props.textures;

        const index = selectedTextures[partName][layer];
        const {path, scale} = textures[simplifiedPartName + (layer ? "Armor" : "")][index];

        const canvasProps = this.getCanvasProps(simplifiedPartName, side, layer);

        let canvasElement = this.refs.renderedPart;
        canvasElement.width  = canvasProps.dWidth + (layer ? 20 : 0);
        canvasElement.height = canvasProps.dHeight + (layer ? 20 : 0);

        let context = canvasElement.getContext('2d');
        context.scale(1 / Math.pow(2, scale), 1 / Math.pow(2, scale));
        context.shadowBlur = 6;
        context.shadowColor = "black";
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
                (canvasProps.dWidth + (layer ? 20 : 0)) * Math.pow(2, scale),
                (canvasProps.dHeight + (layer ? 20 : 0)) * Math.pow(2, scale)
            );
        };
        partTexture.src = path;
    }

    eraseTexture() {
        let canvasElement = this.refs.renderedPart;
        canvasElement.height = 1;
        canvasElement.width = 1;
        let context = canvasElement.getContext('2d');

        context.clearRect(
            0,
            0,
            9999,
            9999
        );
    }

    renderCanvas() {
        const { partName, layer, side } = this.props;
        const selectedTextures = this.props.selectedTextures;

        selectedTextures[partName][layer] !== null ?
            this.drawTexture(layer, side, partName) :
            this.eraseTexture();
    }

    componentDidUpdate(prevProps, prevState) {
        this.renderCanvas();
    }

    componentDidMount() {
        this.renderCanvas();
    }

    render() {
        const { layer } = this.props;
        return(
            <canvas ref="renderedPart" className={"renderedPart" + (layer ? " armorLayer" : "")}>{this.props.partName}</canvas>
        )
    }
}

const mapStateToProps = state => ({
    selectedTextures: state.selectedTextures,
    textures: state.partData
});

export default connect(mapStateToProps)(CanvasRender)
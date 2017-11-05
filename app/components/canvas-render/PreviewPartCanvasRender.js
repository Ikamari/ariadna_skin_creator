//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
//Skin parts
import { headPart } from './parts/HeadPart'
import { bodyPart } from './parts/BodyPart'
import { handPart } from './parts/HandPart'
import { legPart } from './parts/LegPart'

class CanvasRender extends Component {
    getFolderName(partName) {
       return partName.includes("left-") ? partName.slice(5) : partName.includes("right-") ? partName.slice(6) : partName;
    }

    getCanvasProps(folderName, side, layer) {
        const { pairPart } = this.props;
        switch(folderName) {
            case "head":
                return headPart(side, false, layer);
            case "body":
                return bodyPart(side, false, layer);
            case "hand":
                return handPart(side, false, layer, pairPart);
            case "leg":
                return legPart(side, false, layer, pairPart);
            default:
                console.log("Woops! You're broke canvas render!")
        }
    }

    drawTexture(context, canvasProps, layer, folderName, partName) {
        const selectedTextures = this.props.selectedTextures;

        let partTexture = new Image();
        partTexture.onload = () => {
            context.drawImage(
                partTexture,
                canvasProps.posX,
                canvasProps.posY,
                canvasProps.sWidth,
                canvasProps.sHeight,
                canvasProps.sliceX,
                canvasProps.sliceY,
                canvasProps.dWidth + (layer ? 20 : 0),
                canvasProps.dHeight + (layer ? 20 : 0)
            );
        };
        partTexture.src = 'img/' + folderName + '/' + selectedTextures[partName][layer];
    }

    eraseTexture(context) {
        context.clearRect(
            0,
            0,
            context.canvas.width,
            context.canvas.height
        );
    }

    renderCanvas() {
        const { partName, layer, side } = this.props;
        const folderName = this.getFolderName(partName);
        const selectedTextures = this.props.selectedTextures;
        const canvasProps = this.getCanvasProps(folderName, side, layer);

        let canvasElement = this.refs.renderedPart;
        let context = canvasElement.getContext('2d');
        context.canvas.width  = canvasProps.dWidth + (layer ? 30 : 0);
        context.canvas.height = canvasProps.dHeight + (layer ? 30 : 0);
        context.shadowBlur = 6;
        context.shadowColor = "black";
        context.imageSmoothingEnabled = false;

        selectedTextures[partName][layer] !== null ?
            this.drawTexture(context, canvasProps, layer, folderName, partName) : this.eraseTexture(context);
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
    selectedTextures: state.selectedTextures
});

export default connect(mapStateToProps)(CanvasRender)
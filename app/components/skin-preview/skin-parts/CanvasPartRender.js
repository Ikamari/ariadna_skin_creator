//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
//Skin parts
import { headPart } from './HeadPart'
import { bodyPart } from './BodyPart'
import { handPart } from './HandPart'
import { legPart } from './LegPart'

class CanvasRender extends Component {
    getFolderName(partName) {
       return partName.includes("left-") ? partName.slice(5) : partName.includes("right-") ? partName.slice(6) : partName;
    }

    getCanvasProps(folderName, side) {
        switch(folderName) {
            case "head": return headPart(side);
            case "body": return bodyPart(side);
            case "hand": return handPart(side);
            case "leg": return legPart(side);
            default: console.log("Woops! You're broke canvas render!")
        }
    }

    componentDidMount() {
        const { partName, layer, side } = this.props;
        const folderName = this.getFolderName(partName);
        const selectedTextures = this.props.selectedTextures.selectedTextures;
        const canvasProps = this.getCanvasProps(folderName, side);

        if(selectedTextures[partName][layer] !== null) {
            let canvasElement = this.refs.renderedPart;
            let context = canvasElement.getContext('2d');
            context.imageSmoothingEnabled = false;
            let partTexture = new Image();
            context.scale(-1, 1);
            partTexture.onload = function () {
                context.drawImage(
                    partTexture,
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
            partTexture.src = 'img/' + folderName + '/' + selectedTextures[partName][layer] + '.png';
            context.setTransform(1, 0, 0, 1, 0, 0);
        }
    }

    render() {
        return(
            <canvas ref="renderedPart" className="renderedPart">{this.props.partName}</canvas>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedTextures: state.selectedTextures
});

export default connect(mapStateToProps)(CanvasRender)
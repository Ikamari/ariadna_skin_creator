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

    drawTexture(context, canvasProps, simplifiedPartName, textureName) {
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
                canvasProps.dWidth,
                canvasProps.dHeight
            );
        };

        partTexture.src = (this.props.isDev ? './img/' : 'http://ariadna-rp.ru/skin-creator/img/') + (this.props.isArmor ? "armor/" : "main/") + simplifiedPartName + '/' + textureName;
    }


    renderCanvas() {
        const { partName, textureName, simplifiedPartName } = this.props;
        const canvasProps = this.getCanvasProps(simplifiedPartName);
        
        let canvasElement = this.refs.renderedElement;
        let context = canvasElement.getContext('2d');

        context.canvas.width  = canvasProps.dWidth;
        context.canvas.height = canvasProps.dHeight;
        context.imageSmoothingEnabled = false;

        this.drawTexture(context, canvasProps, simplifiedPartName, textureName);
    }

    componentDidUpdate(prevProps, prevState) {
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
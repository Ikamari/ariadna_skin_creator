//React
import React, {Component, PropTypes} from 'react';
//Components
import SkinPart from './SkinPart';

export default class Preview extends Component {
    skin(side) {
        return(
            <div className="side-preview">
                <div className="preview-top-part">
                    <SkinPart part="head" side={side} partName="head"/>
                </div>
                <div className="preview-middle-part">
                    <SkinPart pair={side === "front" ? "left" : "right"} part="hand" side={side} partName={side === "front" ? "left-hand" : "right-hand"}/>
                    <SkinPart part="body" side={side} partName="body"/>
                    <SkinPart pair={side === "front" ? "right" : "left"}     part="hand" side={side} partName={side === "front" ? "right-hand" : "left-hand"}/>
                </div>
                <div className="preview-bottom-part">
                    <SkinPart pair={side === "front" ? "left" : "right"} part="leg" side={side}  partName={side === "front" ? "left-leg" : "right-leg"}/>
                    <SkinPart pair={side === "front" ? "right" : "left"} part="leg" side={side} partName={side === "front" ? "right-leg" : "left-leg"}/>
                </div>
            </div>
        )
    };

    render() {
        return(
            <div className="preview">
                {this.skin("front")}
                {this.skin("back")}
            </div>
        )
    }
}


//React
import React, {Component, PropTypes} from 'react';
//Redux
import { connect } from 'react-redux';
//Components
import SkinPart from './SkinPart';

class Preview extends Component {
    newFormatSkin(side) {
        return(
            <div className="side-preview">
                <div className="preview-top-part">
                    <SkinPart part="head" side={side} partName="head"/>
                </div>
                <div className="preview-middle-part">
                    <SkinPart pair={side === "front" ? "left" : "right"} part="hand" side={side} partName={side === "front" ? "left-hand" : "right-hand"}/>
                    <SkinPart part="body" side={side} partName="body"/>
                    <SkinPart pair={side === "front" ? "right" : "left"} part="hand" side={side} partName={side === "front" ? "right-hand" : "left-hand"}/>
                </div>
                <div className="preview-bottom-part">
                    <SkinPart pair={side === "front" ? "left" : "right"} part="leg" side={side}  partName={side === "front" ? "left-leg" : "right-leg"}/>
                    <SkinPart pair={side === "front" ? "right" : "left"} part="leg" side={side} partName={side === "front" ? "right-leg" : "left-leg"}/>
                </div>
            </div>
        )
    };

    oldFormatSkin(side) {
        return(
            <div className="side-preview">
                <div className="preview-top-part">
                    <SkinPart part="head" side={side} partName="head"/>
                </div>
                <div className="preview-middle-part">
                    <SkinPart pair={side === "front" ? "left" : "right"} isOld={true} part="hand" side={side} partName="right-hand"/>
                    <SkinPart part="body" side={side} isOld={true} partName="body"/>
                    <SkinPart pair={side === "front" ? "right" : "left"} isOld={true} part="hand" side={side} partName="right-hand"/>
                </div>
                <div className="preview-bottom-part">
                    <SkinPart pair={side === "front" ? "left" : "right"} isOld={true} part="leg" side={side}  partName="right-leg"/>
                    <SkinPart pair={side === "front" ? "right" : "left"} isOld={true} part="leg" side={side} partName="right-leg"/>
                </div>
            </div>
        )
    };

    render() {
        return(
            <div className="preview">
                {this.props.format ? this.newFormatSkin("front") : this.oldFormatSkin("front")}
                {this.props.format ? this.newFormatSkin("back")  : this.oldFormatSkin("back")}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    format: state.skin.isNewFormat,
});

export default connect(mapStateToProps)(Preview)



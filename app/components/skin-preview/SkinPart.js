//React
import React, { Component } from 'react';
//Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//Skin parts
import RenderPart from './skin-parts/CanvasPartRender';
//Actions
import * as skinActions from '../../actions/skinActions'

class Preview extends Component {

    render() {
        const { part, side }  = this.props;
        const { selectSkinPart } = this.props.skinActions;
        const pairPart  = this.props.pair;

        const partName = (pairPart ? (side === "front" ? pairPart + "-" : (pairPart === "left" ? "right-" : "left-")) : "") + part;
        let partClassName = "preview-" + (this.props.pair ? pairPart + '-' + part : part) + " preview-part ";
        partClassName += this.props.pair ? ((pairPart === "right" && side === "front") || (pairPart === "left" && side === "back")) ? "mirrored" : "" : "";

        console.log("Made div for " + part + "." + side);

        return(
            <div className={partClassName} onClick={() => selectSkinPart(partName)}>
                <RenderPart side = {side} partName = {partName} layer={0}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    skinActions: bindActionCreators(skinActions, dispatch)
});

export default connect(null , mapDispatchToProps)(Preview)
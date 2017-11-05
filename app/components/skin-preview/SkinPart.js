//React
import React, { Component } from 'react';
//Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//Skin parts
import RenderPart from '../canvas-render/PreviewPartCanvasRender';
//Actions
import * as skinActions from '../../actions/skinActions';

class Preview extends Component {
    render() {
        const { part, side, partName }  = this.props;
        const { selectSkinPart } = this.props.skinActions;
        const pairPart = this.props.pair;

        let partClassName = "preview-" + partName + " preview-part";
        partClassName += pairPart ? (pairPart === "right" ? " mirrored" : "" ) : "";

        console.log("Made div for " + part + "." + side);

        return(
            <div className={partClassName} onClick={() => selectSkinPart(partName)}>
                <RenderPart side = {side} partName = {partName} layer={0}/>
                <RenderPart side = {side} partName = {partName} layer={1} pairPart={pairPart ? pairPart : ""}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    skinActions: bindActionCreators(skinActions, dispatch)
});

export default connect(null , mapDispatchToProps)(Preview)
//React
import React, { Component } from 'react';
//Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//Skin parts
import RenderPart from '../../canvas-render/PreviewPartCanvasRender';
//Actions
import * as skinActions from '../../../actions/skinActions';

class Preview extends Component {
    render() {
        const { part, side, partName }  = this.props;
        const pairPart = this.props.pair;
        const changeState = this.props.changeState;
        let partClassName = "preview-" + partName + " preview-part";
        partClassName += pairPart ? (pairPart === "right" ? " mirrored" : "" ) : "";

        return(
            <div className={partClassName} onClick={() => changeState("part", partName)}>
                <RenderPart side = {side} partName = {partName} layer={0}/>
                {!this.props.isOld ?
                    <RenderPart side = {side} partName = {partName} layer={1} pairPart={pairPart ? pairPart : null}/> :
                    null
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    skinActions: bindActionCreators(skinActions, dispatch)
});

export default connect(null , mapDispatchToProps)(Preview)
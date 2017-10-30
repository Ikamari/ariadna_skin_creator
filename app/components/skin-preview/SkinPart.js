//React
import React, { Component } from 'react';
//Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//Skin parts
import HeadPart from './skin-parts/HeadPart';
import BodyPart from './skin-parts/BodyPart';
import HandPart from './skin-parts/HandPart';
import LegPart from './skin-parts/LegPart';
//Actions
import * as skinActions from '../../actions/skinActions'

class Preview extends Component {
    render() {
        const { part, side }  = this.props;
        const { selectSkinPart } = this.props.skinActions;
        const pairPart  = this.props.pair;

        const partName = (pairPart ? (side === "front" ? pairPart + "-" : (pairPart === "left" ? "right-" : "left-")) : "") + part;
        const partClassName = "preview-" + (this.props.pair ? pairPart + '-' + part : part) + " preview-part";

        console.log("Made div for " + part + "." + side);

        //TODO: onClick event + redux
        return(
            <div className={partClassName} onClick={() => selectSkinPart(partName)}>{
                (part=== "head") ? <HeadPart side={side}/> :
                    (part=== "body") ? <BodyPart side={side}/> :
                        (part=== "hand") ? <HandPart side={side}/> : <LegPart side={side}/>
            }</div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    skinActions: bindActionCreators(skinActions, dispatch)
});

export default connect(null , mapDispatchToProps)(Preview)
//React
import React, { Component } from 'react';
//Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//Actions
import * as skinActions from '../../actions/skinActions';
//Button
import ControlButton from "./ControlButton";

class SkinPartSelectionButtons extends Component {
    render() {
        const { selectSkinPart } = this.props.skinActions;
        const { selectedPart } = this.props.skin;

        return(
            <div className = "skin-part-selection-buttons">
                <ControlButton
                    content = "Голова"
                    activeEvent = {selectedPart === "head"}
                    activeStyle = ""
                    onClickAction = {() => selectSkinPart("head")}
                />
                <ControlButton
                    content = "Торс"
                    activeEvent = {selectedPart === "body"}
                    activeStyle = ""
                    onClickAction = {() => selectSkinPart("body")}
                />
                <ControlButton
                    content = "Л.Рука"
                    activeEvent = {selectedPart === "left-hand"}
                    activeStyle = ""
                    onClickAction = {() => selectSkinPart("left-hand")}
                />
                <ControlButton
                    content = "П.Рука"
                    activeEvent = {selectedPart === "right-hand"}
                    activeStyle = ""
                    onClickAction = {() => selectSkinPart("right-hand")}
                />
                <ControlButton
                    content = "Л.Нога"
                    activeEvent = {selectedPart === "left-hand"}
                    activeStyle = ""
                    onClickAction = {() => selectSkinPart("left-hand")}
                />
                <ControlButton
                    content = "П.Нога"
                    activeEvent = {selectedPart === "right-hand"}
                    activeStyle = ""
                    onClickAction = {() => selectSkinPart("right-hand")}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    skin: state.skin
});

const mapDispatchToProps = (dispatch) => ({
    skinActions: bindActionCreators(skinActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SkinPartSelectionButtons)


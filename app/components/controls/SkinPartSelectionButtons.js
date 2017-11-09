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
                    style = "skin-part-selection-button"
                    activeEvent = {selectedPart === "head"}
                    activeStyle = "skin-part-selection-button-active"
                    onClickAction = {() => selectSkinPart("head")}
                />
                <ControlButton
                    content = "Торс"
                    style = "skin-part-selection-button"
                    activeEvent = {selectedPart === "body"}
                    activeStyle = "skin-part-selection-button-active"
                    onClickAction = {() => selectSkinPart("body")}
                />
                <ControlButton
                    content = "Л.Рука"
                    style = "skin-part-selection-button"
                    activeEvent = {selectedPart === "left-hand"}
                    activeStyle = "skin-part-selection-button-active"
                    onClickAction = {() => selectSkinPart("left-hand")}
                />
                <ControlButton
                    content = "П.Рука"
                    style = "skin-part-selection-button"
                    activeEvent = {selectedPart === "right-hand"}
                    activeStyle = "skin-part-selection-button-active"
                    onClickAction = {() => selectSkinPart("right-hand")}
                />
                <ControlButton
                    content = "Л.Нога"
                    style = "skin-part-selection-button"
                    activeEvent = {selectedPart === "left-leg"}
                    activeStyle = "skin-part-selection-button-active"
                    onClickAction = {() => selectSkinPart("left-leg")}
                />
                <ControlButton
                    content = "П.Нога"
                    style = "skin-part-selection-button"
                    activeEvent = {selectedPart === "right-leg"}
                    activeStyle = "skin-part-selection-button-active"
                    onClickAction = {() => selectSkinPart("right-leg")}
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


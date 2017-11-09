//React
import React, { Component } from 'react';
//Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//Actions
import * as skinActions from '../../actions/skinActions';
import * as selectedTexturesActions from '../../actions/selectedTexturesActions';
//Button
import ControlButton from "./ControlButton";

class SideControlButtons extends Component {
    render() {
        const { selectedPart, isNewFormat, armorLayer } = this.props.skin;
        const { changeSkinFormat, changeSkinLayer } = this.props.skinActions;
        const { removeLayerTexture } = this.props.selectedTexturesActions;

        return(
            <div className = "side-control-buttons">
                <ControlButton
                    content = "Слой: Основной"
                    style = "side-control-button"
                    activeContent = "Слой: Верхний"
                    activeEvent = {armorLayer}
                    onClickAction = {() => changeSkinLayer(armorLayer)}
                />
                <ControlButton
                    content = "Разметка: Старая"
                    style = "side-control-button"
                    activeContent = "Разметка: Новая"
                    activeEvent = {isNewFormat}
                    onClickAction = {() => changeSkinFormat(isNewFormat)}
                />
                <ControlButton
                    content = "Убрать текстуру"
                    style = "side-control-button"
                    onClickAction = {() => {
                        let partLayerToRemove = this.props.selectedTextures[selectedPart];
                        partLayerToRemove[Number(armorLayer)] = null;
                        removeLayerTexture(selectedPart, partLayerToRemove);
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    skin: state.skin
});

const mapDispatchToProps = (dispatch) => ({
    selectedTexturesActions: bindActionCreators(selectedTexturesActions, dispatch),
    skinActions: bindActionCreators(skinActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SideControlButtons)
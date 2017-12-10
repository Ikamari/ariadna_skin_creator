//React
import React, { Component } from 'react';
//Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//Button
import ControlButton from "./ControlButton";

class TopControlButtons extends Component {
    render() {
        const { selectedPart, isNewFormat, armorLayer } = this.props.skin;
        const { changeSkinFormat, changeSkinLayer, selectSkinPart } = this.props.skinActions;
        const { removeLayerTexture } = this.props.selectedTexturesActions;

        const {checkData} = this.props.overseerActions;

        return(
            <div className = "top-control-buttons">
                <ControlButton
                    content = "Слой: Основной"
                    style = "top-control-button"
                    activeContent = "Слой: Верхний"
                    activeEvent = {armorLayer}
                    onClickAction = {() => {
                        checkData();
                        !isNewFormat ? selectSkinPart("head") : undefined;
                        changeSkinLayer(armorLayer);
                    }}
                />
                <ControlButton
                    content = "Разметка: Старая"
                    style = "top-control-button"
                    activeContent = "Разметка: Новая"
                    activeEvent = {isNewFormat}
                    onClickAction = {() => {
                        isNewFormat && armorLayer ? selectSkinPart("head") : undefined;
                        isNewFormat &&  selectedPart === "left-hand" ? selectSkinPart("right-hand") : undefined;
                        isNewFormat &&  selectedPart === "left-leg" ? selectSkinPart("right-leg") : undefined;
                        changeSkinFormat(isNewFormat);
                    }}
                />
                <ControlButton
                    content = "Убрать текстуру"
                    style = "top-control-button delete-texture-button"
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

//Actions
import * as skinActions from '../../../actions/skinActions';
import * as overseerActions from '../../../actions/overseerActions';
import * as selectedTexturesActions from '../../../actions/selectedTexturesActions';

const mapDispatchToProps = (dispatch) => ({
    selectedTexturesActions: bindActionCreators(selectedTexturesActions, dispatch),
    overseerActions: bindActionCreators(overseerActions, dispatch),
    skinActions: bindActionCreators(skinActions, dispatch)
});

const mapStateToProps = (state) => ({
    skin: state.skin,
    selectedTextures: state.selectedTextures
});

export default connect(mapStateToProps, mapDispatchToProps)(TopControlButtons)
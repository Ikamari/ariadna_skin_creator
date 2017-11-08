//React
import React, { Component } from 'react';
//Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//Actions
import * as skinActions from '../actions/skinActions';
import * as selectedTexturesActions from '../actions/selectedTexturesActions';
import * as exportActions from "../actions/exportActions";

class Settings extends Component {
    render() {
        const { selectedPart, isNewFormat, armorLayer } = this.props.skin;
        const { changeSkinFormat, changeSkinLayer } = this.props.skinActions;
        const { removeLayerTexture } = this.props.selectedTexturesActions;
        const { doSkinExport } = this.props.exportActions;

        //TODO: export and delete part button
        console.log("Drew control panel component");

        return(
            <div className="control-panel">
                <button className="control-panel-button" onClick = {() => changeSkinFormat(isNewFormat)}>Переключить формат</button>
                <button className="control-panel-button" onClick = {() => changeSkinLayer(armorLayer)}>Переключить слой</button>
                <button className="control-panel-button" onClick = {() => {
                    let partLayerToRemove = this.props.selectedTextures[selectedPart];
                    partLayerToRemove[Number(armorLayer)] = null;
                    console.log(partLayerToRemove);
                    removeLayerTexture(selectedPart, partLayerToRemove);
                }}>Убрать текстуру</button>
                <button className="control-panel-button" onClick = {() => doSkinExport()}>Экспорт скина</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    skin: state.skin,
    selectedTextures: state.selectedTextures
});

const mapDispatchToProps = (dispatch) => ({
    skinActions: bindActionCreators(skinActions, dispatch),
    selectedTexturesActions: bindActionCreators(selectedTexturesActions, dispatch),
    exportActions: bindActionCreators(exportActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings)

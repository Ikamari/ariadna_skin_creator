//React
import React, { Component } from 'react';
//Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
//Actions
import * as skinActions from '../actions/skinActions'
import * as selectedTexturesActions from '../actions/selectedTexturesActions'

class Settings extends Component {
    render() {
        const { selectedPart, isNewFormat, armorLayer } = this.props.skin;
        const { changeSkinFormat, changeSkinLayer } = this.props.skinActions;
        const { removeSkinPart } = this.props.selectedTexturesActions;

        //TODO: export and delete part button
        console.log("Drew control panel component");

        return(
            <div className="control-panel">
                <button className="control-panel-button" onClick = {() => changeSkinFormat(isNewFormat)}>Переключить формат</button>
                <button className="control-panel-button" onClick = {() => changeSkinLayer(armorLayer)}>Переключить слой</button>
                <button className="control-panel-button" onClick = {() => removeSkinPart(selectedPart, armorLayer)}>Убрать текстуру</button>
                <button className="control-panel-button" >Экспорт</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    skin: state.skin
});

const mapDispatchToProps = (dispatch) => ({
    skinActions: bindActionCreators(skinActions, dispatch),
    selectedTexturesActions: bindActionCreators(selectedTexturesActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings)

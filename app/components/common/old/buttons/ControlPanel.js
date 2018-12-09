//React
import React, { Component } from 'react';
//Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//Actions
import * as exportActions from "../../../../actions/exportActions";
import * as otherActions from "../../../../actions/otherActions";
//Button
import ControlButton from "./ControlButton";

class BottomControlButtons extends Component {
    render() {
        const { doSkinExport } = this.props.exportActions;
        const { switchDebugMode } = this.props.otherActions;

        return(
            <div className = "bottom-control-buttons">
                <ControlButton
                    content = "Экспортировать"
                    style = "bottom-control-button"
                    onClickAction = {() => doSkinExport()}
                />
                <ControlButton
                    content = "???"
                    style = "bottom-control-button control-button-disabled"
                    onClickAction = {() => {}}
                />
                <ControlButton
                    content = "Отладка (Куча текста)"
                    style = "bottom-control-button"
                    onClickAction = {() => switchDebugMode()}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    exportActions: bindActionCreators(exportActions, dispatch),
    otherActions: bindActionCreators(otherActions, dispatch)
});

export default connect(null, mapDispatchToProps)(BottomControlButtons)
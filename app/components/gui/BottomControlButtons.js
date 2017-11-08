//React
import React, { Component } from 'react';
//Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//Actions
import * as exportActions from "../../actions/exportActions";
//Button
import ControlButton from "./ControlButton";

class BottomControlButtons extends Component {
    render() {
        const { doSkinExport } = this.props.exportActions;

        return(
            <div className = "bottom-control-buttons">
                <ControlButton
                    content = "Экспортировать"
                    onClickAction = {() => doSkinExport()}
                />
                <ControlButton
                    content = "Подсказки"
                    onClickAction = {() => {}}
                />
                <ControlButton
                    content = "Отладка (Куча текста)"
                    onClickAction = {() => {}}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    exportActions: bindActionCreators(exportActions, dispatch)
});

export default connect(null, mapDispatchToProps)(BottomControlButtons)
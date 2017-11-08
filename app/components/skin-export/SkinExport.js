//React
import React, { Component } from "react"
//Redux
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
//Layouts
import { drawOldLayout } from "./layouts/OldLayout";
import { drawNewLayout } from "./layouts/NewLayout";
//Actions
import * as exportActions from "../../actions/exportActions";

class SkinExport extends Component {
    drawSkinLayout() {
        const { isNewFormat } = this.props.skin;
        const { skinExportCompleted } = this.props.exportActions;
        const textures = this.props.selectedTextures;
        const canvasElement = this.refs.layout;

        console.log("Starting export...");

        isNewFormat ? drawNewLayout(canvasElement, textures) : drawOldLayout(canvasElement, textures);
        skinExportCompleted();
    }

    componentDidUpdate(prevProps, prevState) {
        const { exportNeeded } = this.props.skinExport;
        exportNeeded ? this.drawSkinLayout() : null;
    }

    render() {
        const { exportNeeded } = this.props.skinExport;

        return(
            <div className="skin-layout">
                <canvas ref="layout"/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    skin: state.skin,
    skinExport: state.skinExport,
    selectedTextures: state.selectedTextures
});

const mapDispatchToProps = (dispatch) => ({
    exportActions: bindActionCreators(exportActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SkinExport)
//React
import React, { Component } from "react"
//Redux
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
//Layouts
import { drawOldLayout } from "./layout/OldLayout";
import { drawNewLayout } from "./layout/NewLayout";
//Helpers
import getMaxScale from "../../helpers/getMaxScale"

class SkinExport extends Component {
    drawSkinLayout() {
        const { isNewFormat } = this.props.skin;
        const { selectedTextures, textures } = this.props;
        const canvasElement = this.refs.layout;
        const converter1 = this.refs.converter1;
        const converter2 = this.refs.converter2;
        const maxScale = getMaxScale(textures, selectedTextures);
        isNewFormat ?
            drawNewLayout(canvasElement, selectedTextures, textures, maxScale, converter1, converter2) :
            drawOldLayout(canvasElement, selectedTextures, textures, maxScale);
    }

    exportSkinLayout() {
        const { skinExportCompleted } = this.props.exportActions;
        const canvasElement = this.refs.layout;

        console.log("Starting export...");

        let link = this.refs.link;
        link.href = canvasElement.toDataURL("image/png");
        link.download = "skin.png";
        link.click();

        skinExportCompleted();
        console.log("Export completed...");
    }

    componentDidUpdate(prevProps, prevState) {
        // this.refs.test.src = this.refs.layout.toDataURL("image/png");
        const { exportNeeded } = this.props.skinExport;
        exportNeeded ? this.exportSkinLayout() : this.drawSkinLayout();
    }

    render() {
        const { exportNeeded } = this.props.skinExport;

        return(
            <div className="skin-layout">
                <canvas ref="layout"/>
                <canvas ref="converter1"/>
                <canvas ref="converter2"/>
                <a ref="link"/>
            </div>
        )
    }
}

//Actions
import * as exportActions from "../../actions/exportActions";

const mapDispatchToProps = (dispatch) => ({
    exportActions: bindActionCreators(exportActions, dispatch)
});

const mapStateToProps = (state) => ({
    skin: state.skin,
    skinExport: state.skinExport,
    selectedTextures: state.selectedTextures,
    textures: state.partData
});

export default connect(mapStateToProps, mapDispatchToProps)(SkinExport)
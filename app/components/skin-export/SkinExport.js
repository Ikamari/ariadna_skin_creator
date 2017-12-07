//React
import React, { Component } from "react"
//Redux
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
//Layouts
import { drawOldLayout } from "./layout/OldLayout";
import { drawNewLayout } from "./layout/NewLayout";
//Actions
import * as exportActions from "../../actions/exportActions";

class SkinExport extends Component {
    drawSkinLayout() {
        const { isNewFormat } = this.props.skin;
        const textures = this.props.selectedTextures;
        const canvasElement = this.refs.layout;

        isNewFormat ? drawNewLayout(canvasElement, textures) : drawOldLayout(canvasElement, textures);
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
                <a ref="link"/>
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
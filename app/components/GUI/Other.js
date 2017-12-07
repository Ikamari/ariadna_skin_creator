//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
//Export
import SkinExport from  '../skin-export/SkinExport';

const PartInfo = (partName, array) => (
    <span key={partName} className="data">
        {partName + ':'}<br/>
        {array[partName][0] ? array[partName][0] : ""}<br/>
        {array[partName][1] ? array[partName][1] : ""}
    </span>
);

class Info extends Component {
    render() {
        const { version, isDev, debug } = this.props.other;
        const { isNewFormat, selectedPart, armorLayer } = this.props.skin;
        const selectedTextures = this.props.selectedTextures;

        return(
            <div className={"app-data" + (debug ? "" : " hidden")}>
                <div className="column">
                    <div>
                        <div className="data">Версия: <span>{version}</span></div>
                        <div className="data">Формат: <span>{(isDev ? 'DEV' : 'PROD') + " режим"}</span></div>
                        <div className="data">Выбранная часть: <span>{selectedPart}</span></div>
                    </div>
                    <div className="selected-textures">
                        Выбранные текстуры:
                        {Object.keys(selectedTextures).map((key) => PartInfo(key, selectedTextures))}
                    </div>
                </div>
                <div className="column">
                    <SkinExport/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    other: state.other,
    skin: state.skin,
    selectedTextures: state.selectedTextures
});

export default connect(mapStateToProps)(Info)
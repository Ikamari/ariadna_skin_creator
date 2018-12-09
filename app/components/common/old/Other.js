//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
//Export
import SkinExport from '../../skin-export/SkinExport';
//Helpers
import simplifyPartName from '../../../helpers/simplifyPartName';

const PartInfo = (partName, partTextureCode, partData) => (
    <span key={partName} className="data">
        {partName + ':'}<br/>
        {partTextureCode[partName][0] !== null ?
            `code: ${partTextureCode[partName][0]},
            path: ${partData[simplifyPartName(partName)][partTextureCode[partName][0]].path},
            scale: ${partData[simplifyPartName(partName)][partTextureCode[partName][0]].scale}` : ""}<br/>
        {partTextureCode[partName][1] !== null ?
            `code: ${partTextureCode[partName][1]},
            path: ${partData[simplifyPartName(partName) + "Armor"][partTextureCode[partName][1]].path},
            scale: ${partData[simplifyPartName(partName) + "Armor"][partTextureCode[partName][1]].scale}` : ""}
    </span>
);

class Info extends Component {
    render() {
        const { partData } = this.props;
        const { version, isDev, debug } = this.props.other;
        const { isNewFormat, selectedPart, armorLayer } = this.props.skin;
        const selectedTextures = this.props.selectedTextures;

        return(
            <div className={"app-data" + (debug ? "" : " hidden")}>
                <div className="column">
                    <div>
                        <div className="data">Версия: <span>{version}</span></div>
                        <div className="data">Режим: <span>{(isDev ? 'DEV' : 'PROD')}</span></div>
                        <div className="data">Выбранная часть: <span>{selectedPart}</span></div>
                        <div className="data">Выбранный слой: <span>{(armorLayer ? 'верхний' : 'основной')}</span></div>
                        <div className="data">Выбранная версия: <span>{(isNewFormat ? '+1.8' : 'pre-1.8')}</span></div>
                    </div>
                    <div className="selected-textures">
                        Выбранные текстуры:
                        {Object.keys(selectedTextures).map((key) => PartInfo(key, selectedTextures, partData))}
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
    selectedTextures: state.selectedTextures,
    partData: state.partData
});

export default connect(mapStateToProps)(Info)
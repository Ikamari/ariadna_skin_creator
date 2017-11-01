//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';

const PartInfo = (partName, array) => (
    <span key={partName}>{partName + ': [' + array[partName][0] + ', ' + array[partName][1] + ']'}</span>
);

class Info extends Component {
    render() {
        const { version } = this.props.other;
        const { isNewFormat, selectedPart, armorLayer } = this.props.skin;
        const selectedTextures = this.props.selectedTextures.selectedTextures;
        console.log("Drew info component");

        return(
            <div className="app-data">
                <span>Версия: {version}</span><br/>
                <span>Формат: {isNewFormat ? 'новый' : 'старый'}</span>
                <span>Текущий слой: {armorLayer ? 'верхний ("броня")' : 'основной'}</span>
                <span>Текущая часть: {selectedPart}</span><br/>
                {Object.keys(selectedTextures).map((key) => PartInfo(key, selectedTextures))}
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
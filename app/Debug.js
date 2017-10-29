//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';

class Debug extends Component {
    render() {
        return(
            <div className="app-data">
                <span>Версия: {this.props.version}</span>
                <span>Выбранная часть: {this.props.selectedPart}</span>
                <span>Выбранный слой: {this.props.armorLayer ? 'верхний ("броня")' : 'основной'}</span>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    version: state.version,
    selectedPart: state.selectedPart,
    armorLayer: state.armorLayer
});

export default connect(mapStateToProps)(Debug)
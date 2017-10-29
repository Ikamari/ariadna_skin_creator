//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';

class Debug extends Component {
    render() {
        const { version } = this.props.other;
        const { skinVersion, selectedPart, armorLayer } = this.props.skin;

        return(
            <div className="app-data">
                <span>Версия: {version}</span>
                <span>Версия скина: {skinVersion ? 'новая' : 'старая'}</span>
                <span>Выбранная часть: {selectedPart}</span>
                <span>Выбранный слой: {armorLayer ? 'верхний ("броня")' : 'основной'}</span>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    other: state.other,
    skin: state.skin
});

export default connect(mapStateToProps)(Debug)
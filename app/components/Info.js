//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';

class Info extends Component {
    render() {
        const { format } = this.props.other;
        const { skinVersion, selectedPart, armorLayer } = this.props.skin;

        //TODO: display more data from storage
        console.log("Drew info component");

        return(
            <div className="app-data">
                <span>Версия: {format}</span><br/>
                <span>Формат: {format ? 'новый' : 'старый'}</span>
                <span>Текущий слой: {armorLayer ? 'верхний ("броня")' : 'основной'}</span>
                <span>Текущая часть: {selectedPart}</span>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    other: state.other,
    skin: state.skin
});

export default connect(mapStateToProps)(Info)
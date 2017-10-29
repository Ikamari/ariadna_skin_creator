import React, { Component } from 'react'

export default class Settings extends Component {
    render() {
        //TODO: normal styles, export button
        return(
            <div className="control-panel">
                <button className="control-panel-button">Формат</button>
                <button className="control-panel-button">Слой</button>
                <button className="control-panel-button">Удалить часть</button>
            </div>
        )
    }
}

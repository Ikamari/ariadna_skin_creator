// React
import React, { Component, Fragment } from 'react'
// Components
import LayerExplorer from '../components/explorers/LayerExplorer'

const fakeTextures = [{}, {}, {}, {}, {}, {}, {}]

export default class LayerControls extends Component {
    render() {
        return (
            <Fragment>
                <LayerExplorer textures={fakeTextures} />
            </Fragment>
        )
    }
}
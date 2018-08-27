// React
import React, { Component, Fragment } from 'react'
// Components
import TextureExplorer from '../components/explorers/TextureExplorer'

const fakeTextures = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

export default class TextureControls extends Component {
    render() {
        return (
            <Fragment>
                <TextureExplorer textures={fakeTextures}/>
            </Fragment>
        )
    }
}
// React
import React, { Component, Fragment } from 'react'
// Components
import TextureExplorer from '../components/explorers/TextureExplorer'

export default class TextureControls extends Component {
    render() {
        return (
            <Fragment>
                <TextureExplorer textures={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}/>
            </Fragment>
        )
    }
}
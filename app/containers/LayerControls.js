// React
import React, { Component, Fragment } from 'react'
// Components
import LayerExplorer from '../components/explorers/LayerExplorer'
// Test data
import placeholderImage from '../resources/placeholder.png'

const fakeTextures = {
    head: [
        {
            url: placeholderImage,
            width: 32,
            height: 16,
        },
        {
            url: placeholderImage,
            width: 256,
            height: 128,
        }
    ],
    torso: [

    ],
    leftHand: [

    ],
    rightHand: [

    ],
    leftLeg: [

    ],
    rightLeg: [

    ],
    body: [

    ]
}

export default class LayerControls extends Component {
    render() {
        return (
            <Fragment>
                <LayerExplorer selectedTextures={fakeTextures} />
            </Fragment>
        )
    }
}
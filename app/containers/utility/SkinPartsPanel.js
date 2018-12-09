// React
import React, { Component, Fragment } from 'react'
// Components
import Button from '../../components/common/Button'
// Styles
import styles from './styles/skin-part-panel.css'
// Resources
import * as icons from '../../resources/body-icons'

const fakeTextures = [
    {
        url:    placeholderImage,
        width:  32,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  256,
        height: 128,
    },
    {
        url:    placeholderImage,
        width:  256,
        height: 128,
    },
    {
        url:    placeholderImage,
        width:  16,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  16,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  32,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  256,
        height: 128,
    },
    {
        url:    placeholderImage,
        width:  256,
        height: 128,
    },
    {
        url:    placeholderImage,
        width:  16,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  16,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  32,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  256,
        height: 128,
    },
    {
        url:    placeholderImage,
        width:  256,
        height: 128,
    },
    {
        url:    placeholderImage,
        width:  16,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  16,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  32,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  256,
        height: 128,
    },
    {
        url:    placeholderImage,
        width:  256,
        height: 128,
    },
    {
        url:    placeholderImage,
        width:  16,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  16,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  32,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  256,
        height: 128,
    },
    {
        url:    placeholderImage,
        width:  256,
        height: 128,
    },
    {
        url:    placeholderImage,
        width:  16,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  16,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  32,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  256,
        height: 128,
    },
    {
        url:    placeholderImage,
        width:  256,
        height: 128,
    },
    {
        url:    placeholderImage,
        width:  16,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  16,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  32,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  256,
        height: 128,
    },
    {
        url:    placeholderImage,
        width:  256,
        height: 128,
    },
    {
        url:    placeholderImage,
        width:  16,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  16,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  32,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  256,
        height: 128,
    },
    {
        url:    placeholderImage,
        width:  256,
        height: 128,
    },
    {
        url:    placeholderImage,
        width:  16,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  16,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  32,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  256,
        height: 128,
    },
    {
        url:    placeholderImage,
        width:  256,
        height: 128,
    },
    {
        url:    placeholderImage,
        width:  16,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  16,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  32,
        height: 16,
    },
    {
        url:    placeholderImage,
        width:  256,
        height: 128,
    },
    {
        url:    placeholderImage,
        width:  256,
        height: 128,
    },
    {
        url:    placeholderImage,
        width:  16,
        height: 16,
    }
]

export default class LayerControls extends Component {
    render() {
        return (
            <Fragment>
                <LayerExplorer textures={fakeTextures} />
            </Fragment>
        )
    }
}
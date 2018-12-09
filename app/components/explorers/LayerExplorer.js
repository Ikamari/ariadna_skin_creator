// React
import React from 'react'
import PropTypes from "prop-types";
// Components
import Explorer     from './Explorer'
import TextureBlock from './TextureBlock'
import Spoiler      from '../common/Spoiler'
// Styles
import defaultStyles from './styles/layer-explorer.css'

const LAYERS = [
    { name: 'head',      label: 'Голова' },
    { name: 'torso',     label: 'Торс' },
    { name: 'leftHand',  label: 'Л. Рука' },
    { name: 'rightHand', label: 'П. Рука' },
    { name: 'leftLeg',   label: 'Л. Нога' },
    { name: 'rightLeg',  label: 'П. Нога' },
    { name: 'body',      label: 'Тело' },
]

class LayerExplorer extends Explorer {

    state = {
        openedLayer: null
    }

    // TODO: add function for onCrossClick
    // TODO: add function for onUpArrowClick
    // TODO: add function for onDownArrowClick
    renderTextureBlock(texture, layerName, index) {
        return <TextureBlock
            key={`layer_explorer-${layerName}-texture-${index}`}
            showArrows
            showCross
            texture={texture}
        />
    }

    setOpenedLayer(layerName) {
        this.setState({
            openedLayer: layerName === this.state.openedLayer ? null : layerName
        })
    }

    renderLayerSpoiler(layerInfo) {
        console.log(this.props.selectedTextures[layerInfo.name])
        return (
            <Spoiler
                key={`${layerInfo.name}-layer-spoiler`}
                label={layerInfo.label}
                // isOpened={layerInfo.name === this.state.openedLayer}
                // onClick={() => this.setOpenedLayer(layerInfo.name)}
                // disabledOpen
            >
                { this.props.selectedTextures[layerInfo.name].map((texture, index) => this.renderTextureBlock(texture, layerInfo.name, index))}
            </Spoiler>
        )
    }

    render() {
        const { styles } = this.props
        return (
            <div className={styles["explorer"]}>
                { LAYERS.map((layerInfo) => this.renderLayerSpoiler(layerInfo)) }
            </div>
        )
    }
}

LayerExplorer.defaultProps = {
    styles: defaultStyles
}

LayerExplorer.propTypes = {
    selectedTextures: PropTypes.object.isRequired,
}

export default LayerExplorer
// React
import React from 'react'
import PropTypes from "prop-types";
// Components
import Explorer from './Explorer'
import TextureBlock from './TextureBlock'
// Styles
import styles from './styles/layer-explorer.css'

class LayerExplorer extends Explorer {
    // TODO: add function for onCrossClick
    // TODO: add function for onUpArrowClick
    // TODO: add function for onDownArrowClick
    renderTextureBlock(texture, index) {
        return <TextureBlock
            key={`texture-explorer_texture-${index}`}
            showArrows
            showCross
            texture={texture}
        />
    }
}

LayerExplorer.defaultProps = {
    styles: styles
}

LayerExplorer.propTypes = {
    textures: PropTypes.array.isRequired,
}

export default LayerExplorer
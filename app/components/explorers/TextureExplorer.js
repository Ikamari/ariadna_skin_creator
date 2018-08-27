// React
import React from 'react'
import PropTypes from "prop-types";
// Components
import Explorer from './Explorer'
import TextureBlock from './TextureBlock'
// Styles
import styles from './styles/texture-explorer.css'

class TextureExplorer extends Explorer {
    // TODO: add function for onClick
    renderTextureBlock(texture, index) {
        return <TextureBlock
            key={`texture-explorer_texture-${index}`}
            texture={texture}
        />
    }
}

TextureExplorer.defaultProps = {
    styles: styles
}

TextureExplorer.propTypes = {
    textures: PropTypes.array.isRequired,
}

export default TextureExplorer
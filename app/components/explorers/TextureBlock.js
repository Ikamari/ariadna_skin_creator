// React
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Components
import Button from '../common/Button'
// Styles
import styles from './styles/texture-block.css'
// Resources
import * as icons from '../../resources/ui'

class TextureBlock extends Component {
    constructor(props) {
        super(props)
    }

    renderArrows() {
        const { onUpArrowClick, onDownArrowClick } = this.props
        return (
            <div className={styles['arrows']}>
                <Button buttonStyles={styles['arrow']} contentStyles={styles['arrow-icon']} iconUrl={icons.up_arrow}   onClick={onUpArrowClick()}   transparentBackground />
                <Button buttonStyles={styles['arrow']} contentStyles={styles['arrow-icon']} iconUrl={icons.down_arrow} onClick={onDownArrowClick()} transparentBackground />
            </div>
        )
    }

    renderCross() {
        const { onCrossClick } = this.props
        return (
            <Button buttonStyles={styles['cross']} iconUrl={icons.cross} onClick={onCrossClick()} transparentBackground />
        )
    }

    renderTextureSize() {
        const { texture } = this.props
        return (
            <div className={styles['texture-size']}>
                {`${texture.width}*${texture.height}`}
            </div>
        )
    }

    renderTexture() {
        const { texture } = this.props
        return (
            <img className={styles['texture']} src={texture.url}/>
        )
    }

    render() {
        const { onClick, showTextureSize, showArrows, showCross } = this.props
        return (
            <div className={styles['texture-block']} onClick={onClick()}>
                { this.renderTexture() }
                { showTextureSize ? this.renderTextureSize() : null }
                { showCross       ? this.renderCross()       : null }
                { showArrows      ? this.renderArrows()      : null }
            </div>
        )
    }
}

TextureBlock.defaultProps = {
    onClick:          () => {},
    onCrossClick:     () => {},
    onUpArrowClick:   () => {},
    onDownArrowClick: () => {},

    showCross:       false,
    showArrows:      false,
    showTextureSize: true
}

TextureBlock.propTypes = {
    texture:          PropTypes.object.isRequired,

    onClick:          PropTypes.func,
    onCrossClick:     PropTypes.func,
    onUpArrowClick:   PropTypes.func,
    onDownArrowClick: PropTypes.func,

    showCross:        PropTypes.bool,
    showArrows:       PropTypes.bool,
    showTextureSize:  PropTypes.bool
}

export default TextureBlock
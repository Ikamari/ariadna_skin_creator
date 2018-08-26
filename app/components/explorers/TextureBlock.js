// React
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Styles
import styles from './styles/texture-block.css'

class TextureBlock extends Component {
    constructor(props) {
        super(props)
    }

    renderTextureSize() {
        const { texture } = this.props
        return (
            <div className={styles["texture-size"]} />
        )
    }

    renderArrows() {
        const { onUpArrowClick, onDownArrowClick } = this.props
        return (
            <div className={styles["arrows"]}>
                <div className={styles["up-arrow"]}   onClick={onUpArrowClick()} />
                <div className={styles["down-arrow"]} onClick={onDownArrowClick()} />
            </div>
        )
    }

    renderCross() {

    }

    renderTexture() {
        const { texture } = this.props
        return (
            <div className={styles["texture"]}/>
        )
    }

    render() {
        const { onClick, showTextureSize, showArrows } = this.props
        return (
            <div className={styles["texture-block"]} onClick={onClick()}>
                { this.renderTexture() }
                { showTextureSize ? this.renderTextureSize() : null }
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
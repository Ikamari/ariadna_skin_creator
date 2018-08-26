// React
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Styles
import defaultStyles from './styles/explorer.css'

class Explorer extends Component {
    renderTextureBlock(index, texture) {
        console.warn(`renderTextureBlock method isn\'t declared in ${this.constructor.name}`)
        return null
    }

    render() {
        const { styles, textures } = this.props
        return (
            <div className={styles["explorer"]}>
                { textures.map((texture, index) => this.renderTextureBlock(texture, index)) }
            </div>
        )
    }
}

Explorer.defaultProps = {
    styles: defaultStyles
}

Explorer.propTypes = {
    styles: PropTypes.string,
    textures: PropTypes.array.isRequired,
}

export default Explorer
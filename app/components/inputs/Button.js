// React
import React, { Component } from 'react'
import PropTypes from "prop-types";
// Styles
import defaultStyles from './styles/button.css'

class Button extends Component {
    render() {
        const { label, iconUrl, styles, onClick, transparentBackground } = this.props
        return (
            <button type='button' className={`${styles['button']} ${transparentBackground ? defaultStyles['transparent'] : ''}`} onClick={onClick}>
                {iconUrl ? <img className={styles['icon']} src={iconUrl} /> : label}
            </button>
        )
    }
}

Button.defaultProps = {
    label:    '',
    iconUrl:  null,
    styles:   defaultStyles,

    onClick:  () => {},

    transparentBackground: false
}

Button.propTypes = {
    label:    PropTypes.string,
    iconUrl:  PropTypes.string,
    styles:   PropTypes.string,

    onClick:  PropTypes.func,

    transparentBackground: PropTypes.bool
}

export default Button
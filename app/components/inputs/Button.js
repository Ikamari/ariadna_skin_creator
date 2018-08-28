// React
import React, { Component } from 'react'
import PropTypes from "prop-types";
// Styles
import defaultStyles from './styles/button.css'

class Button extends Component {
    render() {
        const { label, iconUrl, buttonStyles, contentStyles, onClick, transparentBackground } = this.props
        return (
            <button type='button' className={`${buttonStyles} ${transparentBackground ? defaultStyles['transparent'] : ''}`} onClick={onClick}>
                {iconUrl ? <img className={contentStyles} src={iconUrl} /> : label}
            </button>
        )
    }
}

Button.defaultProps = {
    transparentBackground: false,
    label:                 '',
    iconUrl:               null,
    buttonStyles:          defaultStyles['button'],
    contentStyles:         defaultStyles['content'],
    onClick:               () => {}
}

Button.propTypes = {
    transparentBackground: PropTypes.bool,
    label:                 PropTypes.string,
    iconUrl:               PropTypes.string,
    buttonStyles:          PropTypes.string,
    contentStyles:         PropTypes.string,
    onClick:               PropTypes.func
}

export default Button
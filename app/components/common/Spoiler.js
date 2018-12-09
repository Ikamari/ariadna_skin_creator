// React
import React, { Component } from 'react'
import PropTypes from "prop-types";
// Styles
import defaultStyles from './styles/spoiler.css'

class Spoiler extends Component {
    state = {
        isOpened: this.props.isOpened
    }

    processClick() {
        const { onClick, disabledOpen } = this.props
        // Firstly run received onOpen parameter
        onClick()
        // Open/close spoiler
        if (!disabledOpen) {
            this.setState({
                isOpened: !this.state.isOpened
            })
        }
    }

    render() {
        const { label, styles, disabledOpen, children } = this.props
        const isOpened = disabledOpen ? this.props.isOpened : this.state.isOpened
        return (
            <div className={styles['wrapper']}>
                <div className={`${styles['label-wrapper']} ${isOpened ? styles['opened'] : styles['closed']}`} onClick={() => this.processClick()}>
                    <div className={styles['label']}>{label}</div>
                    <div className={styles['mark']}>{isOpened ? '▲' : '▼'}</div>
                </div>
                <div className={`${styles['children']} ${isOpened ? styles['opened'] : styles['closed']}`}>{children}</div>
            </div>
        )
    }
}

Spoiler.defaultProps = {
    label:        '',
    styles:       defaultStyles,
    isOpened:     false,
    disabledOpen: false,
    onClick:      () => {}
}

Spoiler.propTypes = {
    label:        PropTypes.string,
    styles:       PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    isOpened:     PropTypes.bool,
    disabledOpen: PropTypes.bool,
    onClick:      PropTypes.func
}

export default Spoiler
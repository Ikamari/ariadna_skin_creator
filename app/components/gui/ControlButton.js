//React
import React, {Component} from 'react';

export default class ControlButton extends  Component {
    render() {
        const {onClickAction, style, content, activeEvent, activeStyle} = this.props;
        const activeContent = this.props.activeContent ? this.props.activeContent : content;

        return (
            <div className = {"control-button " + style + (activeEvent ? " " + activeStyle : "")} onClick = {onClickAction}>
                {activeEvent ? activeContent : content}
            </div>
        )
    }
};

ControlButton.defaultProps = {
    style: "",
    activeStyle: "",
    content: "",
    activeContent: "",
    activeEvent: false,
};
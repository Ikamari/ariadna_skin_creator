import React, {Component, PropTypes} from 'react'
import SkinPart from './SkinPart'

export default class Preview extends Component {
    skin(side) {
        return(
            <div className="skin-preview">
                <div className="skin-preview-top">
                    <SkinPart part="head" side={side}/>
                </div>
                <div className="skin-preview-middle">
                    <SkinPart part="hand" side={side}/>
                    <SkinPart part="body" side={side}/>
                    <SkinPart part="hand" side={side}/>
                </div>
                <div className="skin-preview-bottom">
                    <SkinPart part="leg" side={side}/>
                    <SkinPart part="leg" side={side}/>
                </div>
            </div>
        )
    };

    render() {
        return(
            <div className="preview">
                {this.skin("front")}
                {this.skin("back")}
            </div>
        )
    }
}


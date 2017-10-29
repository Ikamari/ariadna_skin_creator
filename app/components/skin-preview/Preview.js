import React, {Component, PropTypes} from 'react';
import SkinPart from './SkinPart';

export default class Preview extends Component {
    skin(side) {
        return(
            <div className="side-preview">
                <div className="preview-top-part">
                    <SkinPart part="head" side={side}/>
                </div>
                <div className="preview-middle-part">
                    <SkinPart pair="left" part="hand" side={side}/>
                    <SkinPart part="body" side={side}/>
                    <SkinPart pair="right" part="hand" side={side}/>
                </div>
                <div className="preview-bottom-part">
                    <SkinPart pair="left" part="leg" side={side}/>
                    <SkinPart pair="right" part="leg" side={side}/>
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


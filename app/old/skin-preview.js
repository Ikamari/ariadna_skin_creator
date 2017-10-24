import React from 'react';

export default class Preview extends React.Component{
    render(){
        return(
            <div>
                <div id={"skin-preview" + this.props.side}>
                    <div id="skin-head" onClick={() => this.props.changeSelectedPart("head")}>
                        <img className="skin-part-texture" src={"./img/" + this.props.skin.head + ".png"}/>
                    </div>
                    <div id="skin-middle">
                        <div id="skin-left-hand" onClick={() => this.props.changeSelectedPart("leftHand")}>
                            <img className="skin-part-texture" src={"./img/" + this.props.skin.leftHand + ".png"}/>
                        </div>
                        <div id="skin-body" onClick={() => this.props.changeSelectedPart("body")}>
                            <img className="skin-part-texture" src={"./img/" + this.props.skin.body + ".png"}/>
                        </div>
                        <div id="skin-right-hand" onClick={() => this.props.changeSelectedPart(this.props.globals.newVersion ? "rightHand" : "leftHand")}>
                            <img className={"skin-part-texture texture-mirrored"} src={"./img/" + (this.props.globals.newVersion ? this.props.skin.rightHand : this.props.skin.leftHand) + ".png"}/>
                        </div>
                    </div>
                    <div id="skin-bottom">
                        <div id="skin-left-leg" onClick={() => this.props.changeSelectedPart("leftLeg")}>
                            <img className="skin-part-texture" src={"./img/" + this.props.skin.leftLeg + ".png"}/>
                        </div>
                        <div id="skin-right-leg" onClick={() => this.props.changeSelectedPart(this.props.globals.newVersion ? "rightLeg" : "leftLeg")}>
                            <img className={"skin-part-texture texture-mirrored"} src={"./img/" + (this.props.globals.newVersion ? this.props.skin.rightLeg : this.props.skin.leftLeg) + ".png"}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
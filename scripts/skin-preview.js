import React from 'react';

export default class Preview extends React.Component{
    render(){
        return(
            <div>
                <div id="skin-preview">
                    <div id="skin-head" onClick={() => this.changeSelectedPart("head")}>
                        <img className="skin-part-texture" src={"./img/" + this.state.skin.head + ".png"}/>
                    </div>
                    <div id="skin-middle">
                        <div id="skin-left-hand" onClick={() => this.changeSelectedPart("leftHand")}>
                            <img className="skin-part-texture" src={"./img/" + this.state.skin.leftHand + ".png"}/>
                        </div>
                        <div id="skin-body" onClick={() => this.changeSelectedPart("body")}>
                            <img className="skin-part-texture" src={"./img/" + this.state.skin.body + ".png"}/>
                        </div>
                        <div id="skin-right-hand" onClick={() => this.changeSelectedPart(this.state.newVersion ? "rightHand" : "leftHand")}>
                            <img className={"skin-part-texture texture-mirrored"} src={"./img/" + (this.state.newVersion ? this.state.skin.rightHand : this.state.skin.leftHand) + ".png"}/>
                        </div>
                    </div>
                    <div id="skin-bottom">
                        <div id="skin-left-leg" onClick={() => this.changeSelectedPart("leftLeg")}>
                            <img className="skin-part-texture" src={"./img/" + this.state.skin.leftLeg + ".png"}/>
                        </div>
                        <div id="skin-right-leg" onClick={() => this.changeSelectedPart(this.state.newVersion ? "rightLeg" : "leftLeg")}>
                            <img className={"skin-part-texture texture-mirrored"} src={"./img/" + (this.state.newVersion ? this.state.skin.rightLeg : this.state.skin.leftLeg) + ".png"}/>
                        </div>
                    </div>
                </div>
                <div id="skin-elements">
                    {this.state.currentLoadedTextures.map((element, key) => this.skinElement(element, key))}
                </div>
            </div>
        )
    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu.js';
import Preview from './skin-preview.js';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            head: "head1",
            headArmor: "",
            body: "body1",
            bodyArmor: "",
            leftHand: "hand1",
            leftHandArmor: "",
            rightHand: "hand1",
            rightHandArmor: "",
            leftLeg: "leg1",
            leftLegArmor: "",
            rightLeg: "leg1",
            rightLegArmor: "",

            headTextures: [],
            headArmorTextures: [],
            bodyTextures: [],
            bodyArmorTextures: [],
            handTextures: [],
            handArmorTextures: [],
            legTextures: [],
            legArmorTextures: [],
            currentLoadedTextures: [],

            newVersion: false,
            currentSelectedPart: "none"
        };

        this.handleStateData = this.handlePreviewData.bind(this);
        this.changeSelectedPart = this.changeSelectedPart.bind(this);
    }

    handleStateData(){
        return(this.state);
    }

    changeSkinVersion(){
        if(this.state.globals.newVersion){
            this.setState({globals: { newVersion: false }})
        } else {
            this.setState({globals: { newVersion: true }})
        }
    }

    changeSelectedPart(partName){
        let needeedTextures;

        switch(partName){
            case "head": {needeedTextures = this.state.textures.headTextures; break}
            case "body": {needeedTextures = this.state.textures.bodyTextures; break}
            case "leftHand": {needeedTextures = this.state.textures.handTextures; break}
            case "rightHand": {needeedTextures = this.state.textures.handTextures; break}
            case "leftLeg": {needeedTextures = this.state.textures.legTextures; break}
            case "rightLeg": {needeedTextures = this.state.textures.legTextures; break}
        }
        this.setState({
            textures: {currentLoadedTextures: needeedTextures},
        })
    }

    distributeTextureNames(textures){
        this.setState({
            textures: {
                headTextures: textures.head,
                bodyTextures: textures.body,
                handTextures: textures.hands,
                legTextures: textures.legs
            }
        })
    }

    componentDidMount(){
        //Trying to do everything without server
        this.distributeTextureNames(getLocalTextures());
    }

    render(){
        return(
            <div>
                <p> Selected part: {this.state.globals.currentSelectedPart}</p>
                <p> Selected version: {this.state.globals.newVersion ? "new" : "old"}</p>
                <button onClick={() => this.changeSkinVersion()}>Change version</button>
                <Preview
                    side = "front"
                    skin = {this.handlePreviewData()}
                    globals = {this.handleGlobalData()}
                    changeSelectedPart = {this.changeSelectedPart}
                />
                <Preview
                    side = "back"
                    skin = {this.handlePreviewData()}
                    globals = {this.handleGlobalData()}
                    changeSelectedPart = {this.changeSelectedPart}
                />
                <Menu
                    textures = {this.handlePreviewData()}
                    globals = {this.handleGlobalData()}
                />
            </div>
        )
    }
}

const getLocalTextures = () => {
    return({
        head: ["head1", "head2", "head3", "head4", "head5"],
        body: ["body1", "body2", "body3", "body4", "body5"],
        hands: ["hand1", "hand2", "hand3", "hand4", "hand5"],
        legs: ["leg1", "leg2",  "leg3",  "leg4",  "leg5"]
    })
};

ReactDOM.render(
    <App/>,
    document.getElementById('content')
);




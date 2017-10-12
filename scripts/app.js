import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu.js';
import Preview from './skin-preview.js';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            skin:{
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
                rightLegArmor: ""
            },
            headTextures: [],
            bodyTextures: [],
            handTextures: [],
            legTextures: [],
            currentLoadedTextures: [],
            currentSelectedPart: "none",
            newVersion: false
        };

        this.handlePart = this.handlePart.bind(this)
    }

    handleSkinParts(){
        return(this.state);
    }

    handleVersion(){

    }

    changeSkinVersion(){
        if(this.state.newVersion){
            this.setState({newVersion: false})
        } else {
            this.setState({newVersion: true})
        }
    }

    distributeTextureNames(textures){
        this.setState({
            headTextures: textures.head,
            bodyTextures: textures.body,
            handTextures: textures.hands,
            legTextures: textures.legs
        })
    }

    componentDidMount(){
        //Trying to do everything without server
        this.distributeTextureNames(getLocalTextures());
    }

    render(){
        return(
            <div>
                <p> Selected part: {this.state.currentSelectedPart}</p>
                <p> Selected version: {this.state.newVersion ? "new" : "old"}</p>
                <button onClick={() => this.changeSkinVersion()}>Change version</button>
                <Preview handler = {this.handlePart}/>
                <Preview handler = {this.handlePart}/>
                <Menu/>
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




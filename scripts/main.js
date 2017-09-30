//TODO: UI, 2D skin preview, check skin-preview

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
        }
    };

    changeSelectedPart(partName){
        let needeedTextures;
        switch(partName){
            case "head": {needeedTextures = this.state.headTextures; break}
            case "body": {needeedTextures = this.state.bodyTextures; break}
            case "leftHand": {needeedTextures = this.state.handTextures; break}
            case "rightHand": {needeedTextures = this.state.handTextures; break}
            case "leftLeg": {needeedTextures = this.state.legTextures; break}
            case "rightLeg": {needeedTextures = this.state.legTextures; break}
        }
        this.setState({
            currentSelectedPart: partName,
            currentLoadedTextures: needeedTextures
        })
    }

    changeSkinVersion(){
        if(this.state.newVersion){
            this.setState({newVersion: false})
        } else {
            this.setState({newVersion: true})
        }
    }

    changePartTexture(name){
        let currentSkin = this.state.skin;
        currentSkin[this.state.currentSelectedPart] = name;
        this.setState({
            skin: currentSkin
        })
    }

    distributeTextureNames(textures){
        this.setState({
            headTextures: textures.head,
            bodyTextures: textures.body,
            handTextures: textures.hands,
            legTextures: textures.legs
        })
    }

    skinElement(elementName, key) {
        return(
        <div key={key} className="skin-elements-element" onClick={() => this.changePartTexture(elementName)}>
            <img className="skin-elements-element-icon" src={"./img/" + elementName + ".png"}/>
        </div>
        )
    };

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
        );
    }
}

// const getTextures = () => {
//
// };

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


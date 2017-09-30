//TODO: UI, 2D skin preview, check skin-preview

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            skin:{
                head: "head1",
                body: "body1",
                hand: "hand1",
                leg: "leg1"
            },
            headTextures: [],
            bodyTextures: [],
            handTextures: [],
            legTextures: [],
            currentLoadedTextures: [],
            currentSelectedPart: "none"
        }
    };

    changeSelectedPart(partName){
        let needeedTextures;
        switch(partName){
            case "head": {needeedTextures = this.state.headTextures; break}
            case "body": {needeedTextures = this.state.bodyTextures; break}
            case "hand": {needeedTextures = this.state.handTextures; break}
            case "leg": {needeedTextures = this.state.legTextures; break}
        }
        this.setState({
            currentSelectedPart: partName,
            currentLoadedTextures: needeedTextures
        })
    }

    changePartTexture(){
        let currentSkin = this.state.skin;
        console.log(e);
        // currentSkin[this.state.currentSelectedPart]
        this.setState({
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

    componentDidMount(){
        //Trying to do everything without server
        this.distributeTextureNames(getLocalTextures());
    }

    render(){
        return(
            <div>
                <p> Selected part: {this.state.currentSelectedPart}</p>
                <div id="skin-preview">
                    <div id="skin-head" onClick={() => this.changeSelectedPart("head")}>
                        <img className="skin-part-texture" src={"./img/" + this.state.skin.head + ".png"}/>
                    </div>
                    <div id="skin-middle">
                        <div id="skin-left-hand" onClick={() => this.changeSelectedPart("hand")}>
                            <img className="skin-part-texture" src={"./img/" + this.state.skin.hand + ".png"}/>
                        </div>
                        <div id="skin-body" onClick={() => this.changeSelectedPart("body")}>
                            <img className="skin-part-texture" src={"./img/" + this.state.skin.body + ".png"}/>
                        </div>
                        <div id="skin-right-hand" onClick={() => this.changeSelectedPart("hand")}>
                            <img className="skin-part-texture" src={"./img/" + this.state.skin.hand + ".png"}/>
                        </div>
                    </div>
                    <div id="skin-bottom">
                        <div id="skin-left-leg" onClick={() => this.changeSelectedPart("leg")}>
                            <img className="skin-part-texture" src={"./img/" + this.state.skin.leg + ".png"}/>
                        </div>
                        <div id="skin-right-leg" onClick={() => this.changeSelectedPart("leg")}>
                            <img className="skin-part-texture" src={"./img/" + this.state.skin.leg + ".png"}/>
                        </div>
                    </div>
                </div>
                <div id="skin-elements">
                    {this.state.currentLoadedTextures.map((element, key) => skinElement(element, key))}
                </div>
            </div>
        );
    }
}

const skinElement = (elementName, key) => (
    <div key={key} className="skin-elements-element" onClick={() => this.changePartTexture().bind(this)}>
        <img className="skin-elements-element-icon" src={"./img/" + elementName + ".png"}/>
    </div>
);

const getTextures = () => {

};

const getLocalTextures = () => {
    return({
        head: ["head1", "head2"],
        body: ["body1", "body2"],
        hands: ["hand1", "hand2"],
        legs: ["leg1", "leg2"]
    })
};

ReactDOM.render(
    <App/>,
    document.getElementById('content')
);


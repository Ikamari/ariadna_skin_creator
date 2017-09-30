//TODO: UI, 2D skin preview, check skin-preview

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            skin_head: "head1",
            skin_body: "body1",
            skin_hand: "hand1",
            skin_leg: "leg1",
            currentLoadedElements: [],
            currentSelectedPart: "none"
        }
    };

    changeSelectedPart(partName){
        this.setState({
            currentSelectedPart: partName
        })
    }

    render(){
        return(
            <div>
                <p> Selected part: {this.state.currentSelectedPart}</p>
                <div id="skin-preview">
                    <div id="skin-head" onClick={() => this.changeSelectedPart("head")}>
                        <img className="skin-part-texture" src={"./img/" + this.state.skin_head + ".png"}/>
                    </div>
                    <div id="skin-middle">
                        <div id="skin-left-hand" onClick={() => this.changeSelectedPart("hand")}>
                            <img className="skin-part-texture" src={"./img/" + this.state.skin_hand + ".png"}/>
                        </div>
                        <div id="skin-body" onClick={() => this.changeSelectedPart("body")}>
                            <img className="skin-part-texture" src={"./img/" + this.state.skin_body + ".png"}/>
                        </div>
                        <div id="skin-right-hand" onClick={() => this.changeSelectedPart("hand")}>
                            <img className="skin-part-texture" src={"./img/" + this.state.skin_hand + ".png"}/>
                        </div>
                    </div>
                    <div id="skin-bottom">
                        <div id="skin-left-leg" onClick={() => this.changeSelectedPart("leg")}>
                            <img className="skin-part-texture" src={"./img/" + this.state.skin_leg + ".png"}/>
                        </div>
                        <div id="skin-right-leg" onClick={() => this.changeSelectedPart("leg")}>
                            <img className="skin-part-texture" src={"./img/" + this.state.skin_leg + ".png"}/>
                        </div>
                    </div>
                </div>
                <div id="skin-elements">
                    {this.state.currentLoadedElements.map(skinElement)}
                </div>
            </div>
        );
    }
}

const showElements = () => {
    let img = new Image();
    img.src = "./img/leg3.png";
    img.onload = function () {
        console.log("Ok")
    };
    return(
        <div>

        </div>
    )
};

const skinElement = (elementName) => (
    <div className="skin-elements-element">
        <img className="skin-part-texture" src={"./img/" + elementName + ".png"}/>
    </div>
);

ReactDOM.render(
    <App/>,
    document.getElementById('content')
);


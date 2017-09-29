//TODO: UI, 2D skin preview, check skin-preview

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            skin_head: "head1",
            skin_body: "body1",
            skin_hand: "hand1",
            skin_leg: "leg1"
        }
    };

    render(){
        return(
            <div>
                <div id="skin-preview">
                    <div id="skin-head">
                        <img href={"./img/" + this.state.skin_head + ".png"}/>
                    </div>
                    <div id="skin-middle">
                        <div id="skin-left-hand">
                            <img href={"./img/" + this.state.skin_hand + ".png"}/>
                        </div>
                        <div id="skin-body">
                            <img href={"./img/" + this.state.skin_body + ".png"}/>
                        </div>
                        <div id="skin-right-hand">
                            <img href={"./img/" + this.state.skin_hand + ".png"}/>
                        </div>
                    </div>
                    <div id="skin-bottom">
                        <div id="skin-left-leg" >
                            <img href={"./img/" + this.state.skin_leg + ".png"}/>
                        </div>
                        <div id="skin-right-leg">
                            <img href={"./img/" + this.state.skin_leg + ".png"}/>
                        </div>
                    </div>
                </div>
                <div id="skin-elements">

                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('content')
);


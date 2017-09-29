//TODO: UI, 2D skin preview, check skin-preview

class App extends React.Component{
    render(){
        return(
            <div>
                <div id="skin-preview">
                    <div id="skin-head">

                    </div>
                    <div id="skin-middle">
                        <div id="skin-left-hand">

                        </div>
                        <div id="skin-body">

                        </div>
                        <div id="skin-right-hand">

                        </div>
                    </div>
                    <div id="skin-bottom">
                        <div id="skin-left-leg">

                        </div>
                        <div id="skin-right-leg">

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


//TODO: UI, 2D skin preview, check skin-preview

class App extends React.Component{
    static render(){
        return(
            <div>
                <div id="skin-preview">
                    <div id="skin-head">

                    </div>
                    <div id="skin-body">

                    </div>
                    <div id="skin-hands">

                    </div>
                    <div id="skin-legs">

                    </div>
                </div>
                <div id="skin-elements">

                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('content')
);


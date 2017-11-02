//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Components
import Preview from './components/skin-preview/Preview';
import Palette from './components/texture-palette/Palette';
import Settings from './components/ControlPanel';
import Info from './components/Info';
//Axios
import axios from 'axios';
//Actions
import * as textureActions from './actions/textureActions';

class App extends Component {
    loadTextures() {
        const { getTexturesFromServer } = this.props.textureActions;
        axios("http://ariadna.skins.back/handleTextures.php")
            .then((response) => {
                getTexturesFromServer(response.data);
                console.log("Successfully loaded texture names");
            })
            .catch((error) => {
                console.log(error);
            })
    };

    render() {
        console.log("Made div for all components");
        this.loadTextures();

        return(
            <div className="app">
                <Preview/>
                <div className="menu">
                    <Palette/>
                    <Settings/>
                    <Info/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    textureActions: bindActionCreators(textureActions, dispatch)
});

export default connect(null, mapDispatchToProps)(App)
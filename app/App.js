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
import { loadTextures } from './TextureLoader'
//Actions
import * as textureActions from './actions/textureActions';

class App extends Component {
    render() {
        loadTextures(this.props.textureActions);
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
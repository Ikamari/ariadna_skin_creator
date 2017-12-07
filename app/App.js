//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Components
import Preview from './components/GUI/preview/SkinPreview';
import Palette from './components/GUI/PartPalette';
//Controls
import SkinSettings from './components/GUI/buttons/SkinSettings';
import PartSelection from './components/GUI/buttons/PartSelection';
import ControlPanel from './components/GUI/buttons/ControlPanel';
//Other
import Other from './components/GUI/Other';

import { loadTextures } from './TextureLoader';
//Actions
import * as textureActions from './actions/textureActions';

class App extends Component {
    render() {
        const isDev = this.props.isDev;
        loadTextures(this.props.textureActions, isDev);

        return(
            <div className="app">
                <Preview/>
                <div className="controls">
                    <SkinSettings/>
                    <div className="controls-middle">
                        <PartSelection/>
                        <Palette isDev={isDev}/>
                        <ControlPanel/>
                    </div>
                </div>
                <Other/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isDev: state.other.isDev,
});

const mapDispatchToProps = (dispatch) => ({
    textureActions: bindActionCreators(textureActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
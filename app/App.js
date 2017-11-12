//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Components
import Preview from './components/skin-preview/Preview';
import Settings from './components/ControlPanel';
import SkinExport from  './components/skin-export/SkinExport';
import Info from './components/controls/Info';
import Palette from './components/controls/Palette';
import SkinPartSelectionButtons from './components/controls/SkinPartSelectionButtons';
import TopControlButtons from './components/controls/TopControlButtons';
import BottomControlButtons from './components/controls/BottomControlButtons';
import { loadTextures } from './TextureLoader';
//Actions
import * as textureActions from './actions/textureActions';

class App extends Component {
    render() {
        loadTextures(this.props.textureActions);
        return(
            <div className="app">
                <Preview/>
                <div className="controls">
                    <TopControlButtons/>
                    <div className="controls-middle">
                        <SkinPartSelectionButtons/>
                        <Palette/>
                        <BottomControlButtons/>
                    </div>
                </div>
                {/*<Info/>*/}
                <SkinExport/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    textureActions: bindActionCreators(textureActions, dispatch)
});

export default connect(null, mapDispatchToProps)(App)
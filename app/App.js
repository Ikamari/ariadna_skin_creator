//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Components
import Preview from './components/skin-preview/Preview';
import Palette from './components/controls/Palette';
//Controls
import TopControlButtons from './components/controls/TopControlButtons';
import SkinPartSelectionButtons from './components/controls/SkinPartSelectionButtons';
import BottomControlButtons from './components/controls/BottomControlButtons';
//Other
import Info from './components/controls/Info';
import SkinExport from  './components/skin-export/SkinExport';
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
                    <TopControlButtons/>
                    <div className="controls-middle">
                        <SkinPartSelectionButtons/>
                        <Palette isDev={isDev}/>
                        <BottomControlButtons/>
                    </div>
                </div>
                {/*<Info/>*/}
                <SkinExport/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isDev: state.other.isDev
});

const mapDispatchToProps = (dispatch) => ({
    textureActions: bindActionCreators(textureActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
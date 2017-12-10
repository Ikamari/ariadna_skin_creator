// React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Components
import Overseer from './Overseer';
// GUI
import Preview from './components/GUI/preview/SkinPreview';
import Palette from './components/GUI/PartPalette';
import SkinSettings from './components/GUI/buttons/SkinSettings';
import PartSelection from './components/GUI/buttons/PartSelection';
import ControlPanel from './components/GUI/buttons/ControlPanel';
// Other
import Other from './components/GUI/Other';
// Functions
import { loadTextures } from './TextureLoader';

class App extends Component {
    changeStateForPalette(stateName, value = null) {
        const {changeSkinFormat, changeSkinLayer, selectSkinPart} = this.props.skinActions;
        const {checkData} = this.props.overseerActions;

        switch(stateName) {
            case "layer": {
                changeSkinLayer();
                checkData();
                break;
            }
            case "part": {
                selectSkinPart(value);
                checkData();
                break;
            }
            case "version": {
                changeSkinFormat();
                break;
            }
            default: console.log("Wrong state name in changeStateForPalette")
        }
    }

    render() {
        const isDev = this.props.isDev;
        loadTextures(this.props.textureActions, isDev);

        return(
            <div className="app">
                <Preview changeState={(stateName, value) => this.changeStateForPalette(stateName, value)}/>
                <div className="controls">
                    <SkinSettings changeState={(stateName, value) => this.changeStateForPalette(stateName, value)}/>
                    <div className="controls-middle">
                        <PartSelection changeState={(stateName, value) => this.changeStateForPalette(stateName, value)}/>
                        <Palette isDev={isDev}/>
                        <ControlPanel/>
                    </div>
                </div>
                <Other/>
                <Overseer/>
            </div>
        )
    }
}

//Actions
import * as textureActions from './actions/textureActions';
import * as skinActions from './actions/skinActions';
import * as overseerActions from './actions/overseerActions';

const mapDispatchToProps = (dispatch) => ({
    textureActions: bindActionCreators(textureActions, dispatch),
    skinActions: bindActionCreators(skinActions, dispatch),
    overseerActions: bindActionCreators(overseerActions, dispatch)
});

const mapStateToProps = state => ({
    isDev: state.other.isDev,
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
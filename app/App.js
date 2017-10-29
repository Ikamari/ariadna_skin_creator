//React
import React, { Component } from 'react';
//App
import Preview from './components/skin-preview/Preview';
import Palette from './components/texture-palette/Palette';
import Settings from './components/ControlPanel';
//Redux
import { connect } from 'react-redux';
//Other
import Debug from './Debug';

export default class App extends Component {
    render() {
        return(
            <div>
                <Debug/>
                <Preview/>
                <Palette/>
                <Settings/>
            </div>
        )
    }
}
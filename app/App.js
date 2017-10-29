import React, { Component, PropTypes } from 'react';
import Preview from './components/skin-preview/Preview';
import Palette from './components/texture-palette/Palette';
import Settings from './ControlPanel';
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
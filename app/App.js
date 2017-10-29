//React
import React, { Component } from 'react';
//Components
import Preview from './components/skin-preview/Preview';
import Palette from './components/texture-palette/Palette';
import Settings from './components/ControlPanel';
import Info from './components/Info';

export default class App extends Component {
    render() {
        console.log("Made div for all components");

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
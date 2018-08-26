// React
import React, { Component } from 'react'
// Containers
import { LayerControls, SkinPreview, TextureControls } from "./containers"
// Styles
import styles from './containers/styles/app.css'

export default class App extends Component {
    render() {
        return (
            <div className={styles["app"]}>
                <div className={styles["top-part"]}>
                    <div className={styles["top-left-part"]}>
                        <LayerControls/>
                    </div>
                    <div className={styles["top-right-part"]}>
                        <SkinPreview/>
                    </div>
                </div>
                <div className={styles["bottom-part"]}>
                    <TextureControls/>
                </div>
            </div>
        )
    }
}
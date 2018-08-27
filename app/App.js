// React
import React, { Component, Fragment } from 'react'
// Containers
import { LayerControls, SkinPreview, TextureControls } from "./containers"
// Styles
import styles from './containers/styles/app.css'
// Test
import Button from './components/inputs/Button'
import * as bodyIcons from './resources/body-icons'

export default class App extends Component {
    render() {
        return (
            <Fragment>
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

                <Button label='Some text'/>
                <Button label='Moooooooore text'/>
                <Button iconUrl={bodyIcons.body_01} transparentBackground/>
                <Button iconUrl={bodyIcons.body_02} transparentBackground/>
                <Button iconUrl={bodyIcons.body_03} transparentBackground/>
                <Button iconUrl={bodyIcons.body_04} transparentBackground/>
                <Button iconUrl={bodyIcons.body_05} transparentBackground/>
                <Button iconUrl={bodyIcons.body_06} transparentBackground/>
                <Button iconUrl={bodyIcons.body_07} transparentBackground/>
                <Button iconUrl={bodyIcons.body_08} transparentBackground/>
                <Button iconUrl={bodyIcons.body_09} transparentBackground/>

            </Fragment>
        )
    }
}
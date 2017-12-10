// React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Helpers
import simplifyPartName from './helpers/simplifyPartName';
import getScale from './helpers/getTextureScale';


class Overseer extends Component {
    constructor(props) {
        super(props);

        this.partTextures = [];
        this.partName = "";
        this.isArmor = false;
    }

    getDimensions(name) {
        return new Promise((resolve, reject) => {
            let imageBlock = this.refs.dimensionCheck;
            const path = `${this.props.isDev ? "./img/" : "http://ariadna-rp.ru/skin-creator/img/"}${this.isArmor? 'armor/' : 'main/'}${this.partName + '/' + name}`;
            imageBlock.onload = (e) => {
                resolve({height: imageBlock.naturalHeight, width: imageBlock.naturalWidth})
            };
            imageBlock.src = path;
        })
    }

    getPartTexturesDimensions(index = 0) {
        let dimensions = this.getDimensions(this.partTextures[index].name);
        dimensions.then(
            result => {
                Object.assign(this.partTextures[index], result);
                index < this.partTextures.length - 1 ?
                    this.getPartTexturesDimensions(index + 1) :
                    this.getPartTexturesScale()
            }
        )
    }

    getPartTexturesScale() {
        this.partTextures.map((value, index) => {
            const height = this.partTextures[index].height;
            const width = this.partTextures[index].width;
            Object.assign(this.partTextures[index], {scale: getScale(height, width, false)});
        });
        console.log(this.partTextures)
    }

    getPartInfo(simplifiedPartName, isArmor) {
        const loadedTextures = this.props.loadedTextures[Number(isArmor)][simplifiedPartName];
        this.partTextures = [];
        this.partName = simplifiedPartName;
        this.isArmor = isArmor;

        Array.isArray(loadedTextures) ?
            loadedTextures.map((value) => this.partTextures.push({name: value})) :
            Object.keys(loadedTextures).map((key) => this.partTextures.push({name: loadedTextures[key]}));

        this.getPartTexturesDimensions();
    }

    checkPartTexturesData(partName) {
        let partData = this.props.partData;
        return partData[partName].length === 0;
    }

    render() {
        //Check if there is needed to check data
        const needToCheckData = this.props.checkDataSwitch;
        if(needToCheckData) {
            const {selectedPart, armorLayer} = this.props.skinSettings;
            const simplifiedPartName = simplifyPartName(selectedPart);

            //If part textures are already checked, then there is no need to do that again
            if (this.checkPartTexturesData(simplifiedPartName + (armorLayer ? "Armor" : "")) && simplifiedPartName !== "none")
                this.getPartInfo(simplifiedPartName, armorLayer);
        }

        return (
            <img ref="dimensionCheck" className="hidden"/>
        )
    }
}

//Actions
import * as overseerActions from './actions/overseerActions';

const mapDispatchToProps = (dispatch) => ({
    overseerActions: bindActionCreators(overseerActions, dispatch)
});

const mapStateToProps = state => ({
    checkDataSwitch: state.overseer.checkDataSwitch,
    loadedTextures: state.loadedTextures,
    partData: state.partData,
    skinSettings: state.skin,
    isDev: state.other.isDev
});

export default connect(mapStateToProps, mapDispatchToProps)(Overseer)
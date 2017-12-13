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
        this.fullPartName = "";
        this.isArmor = false;
    }

    getDimensions(path) {
        return new Promise((resolve, reject) => {
            let imageBlock = this.refs.dimensionCheck;
            imageBlock.onload = (e) => {
                resolve({height: imageBlock.naturalHeight, width: imageBlock.naturalWidth})
            };
            imageBlock.src = path;
        })
    }

    getPartTexturesDimensions(index = 0) {
        let dimensions = this.getDimensions(this.partTextures[index].path);
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
        const { writePartData } = this.props.partDataActions;

        this.partTextures.map((value, index) => {
            const height = this.partTextures[index].height;
            const width = this.partTextures[index].width;
            Object.assign(this.partTextures[index], {scale: getScale(height, width, false)});
        });

        writePartData(this.partTextures, this.fullPartName);
    }

    getPartInfo(simplifiedPartName, isArmor) {
        const loadedTextures = this.props.loadedTextures[Number(isArmor)][simplifiedPartName];
        this.partTextures = [];
        this.partName = simplifiedPartName;
        this.fullPartName = simplifiedPartName + (isArmor ? "Armor" : "");
        this.isArmor = isArmor;

        Array.isArray(loadedTextures) ?
            loadedTextures.map((value) => {
                const path = `${this.props.isDev ? "./img/" : "http://ariadna-rp.ru/skin-creator/img/"}${this.isArmor? 'armor/' : 'main/'}${this.partName + '/' + value}`;
                this.partTextures.push({path: path})
            }) :
            Object.keys(loadedTextures).map((key) => {
                const path = `${this.props.isDev ? "./img/" : "http://ariadna-rp.ru/skin-creator/img/"}${this.isArmor? 'armor/' : 'main/'}${this.partName + '/' + loadedTextures[key]}`;
                this.partTextures.push({path: path})
            });

        this.getPartTexturesDimensions();
    }

    checkPartTexturesData(partName) {
        //If array is not empty, then there is no need to check it
        let partData = this.props.partData;
        //console.log(partData);
        return partData[partName] ?
            partData[partName].length === 0 : false;
    }

    componentDidUpdate() {
        try {
            //Check if there is needed to check data
            const {checkData} = this.props.overseerActions;
            const needToCheckData = this.props.checkDataSwitch;
            // console.log(needToCheckData);
            // if(needToCheckData) {
            const {selectedPart, armorLayer} = this.props.skinSettings;
            const simplifiedPartName = simplifyPartName(selectedPart);

            //If part textures are already checked, then there is no need to do that again
            if (this.checkPartTexturesData(simplifiedPartName + (armorLayer ? "Armor" : "")) && simplifiedPartName !== "none")
                this.getPartInfo(simplifiedPartName, armorLayer);
            //     else
            //         checkData();
            // }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        //Return hidden img that will be used to get dimensions of textures
        return (<img ref="dimensionCheck" className="hidden"/>)
    }
}

//Actions
import * as overseerActions from './actions/overseerActions';
import * as partDataActions from './actions/partDataActions';

const mapDispatchToProps = (dispatch) => ({
    overseerActions: bindActionCreators(overseerActions, dispatch),
    partDataActions: bindActionCreators(partDataActions, dispatch)
});

const mapStateToProps = state => ({
    checkDataSwitch: state.overseer.checkDataSwitch,
    loadedTextures: state.loadedTextures,
    partData: state.partData,
    skinSettings: state.skin,
    isDev: state.other.isDev
});

export default connect(mapStateToProps, mapDispatchToProps)(Overseer)
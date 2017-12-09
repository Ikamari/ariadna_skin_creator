// React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Helpers
import simplifyPartName from './helpers/simplifyPartName';


class Overseer extends Component {
    getPartTexturesSize() {

    }

    getPartTexturesScale() {

    }

    getPartInfo(simplifiedPartName, isArmor) {
        const loadedTextures = this.state.loadedTextures[Number(isArmor)][simplifiedPartName];
        let partTextures = [];

        Array.isArray(loadedTextures) ?
            loadedTextures.map((value) => ({link: value})) :
            Object.keys(loadedTextures).map((key) => ({link: value}))

    }

    checkPartTexturesData(partName) {
        const {partData} = this.props;
        return partData[partName] === [];
    }

    render() {
        //Check if there is needed to check data
        const needToCheckData = this.props.checkDataSwitch;
        if(!needToCheckData)
            return null;

        const {selectedPart, isArmor} = this.props.skin;
        const simplifiedPartName = simplifyPartName(selectedPart);

        //If part textures are already checked, then there is no need to do that again
        if(this.checkPartTexturesData(simplifiedPartName + (isArmor ? "Armor" : "")))
            this.getPartInfo(simplifiedPartName, isArmor);


        return null
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
    skinSettings: state.skin
});

export default connect(mapStateToProps, mapDispatchToProps)(Overseer)
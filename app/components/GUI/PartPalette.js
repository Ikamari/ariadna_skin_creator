//React
import React, {Component, PropTypes} from 'react';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Components
import RenderElement from '../canvas-render/PaletteElementCanvasRender';
//Actions
import * as selectedTexturesActions from '../../actions/selectedTexturesActions';
//Helpers
import simplifyPartName from '../../helpers/simplifyPartName';


class Palette extends Component {

    showPaletteElement(textureName, simplifiedPartName) {
        const partName = this.props.skin.selectedPart;
        const layer = this.props.skin.armorLayer;
        const isArmor = this.props.skin.armorLayer;
        const { selectedTextures } = this.props;
        const { selectLayerTexture } = this.props.selectedTexturesActions;
        const texturePath = `${this.props.isDev ? "./img/" : "http://ariadna-rp.ru/skin-creator/img/"}${isArmor? 'armor/' : 'main/'}${simplifiedPartName + '/' + textureName}`;

        return(
            <div
                key = {textureName + simplifiedPartName}
                className="paletteElement"
                onClick={() => {
                    let partLayerToChange = selectedTextures[partName];
                    partLayerToChange[Number(layer)] = texturePath;
                    console.log(partName, partLayerToChange);
                    selectLayerTexture(partName, partLayerToChange);
                }}
            >
            <RenderElement
                className="paletteElement"
                key={textureName + "Preview"}
                textureName={textureName}
                partName={partName}
                simplifiedPartName={simplifiedPartName}
                isArmor={isArmor}
            />
            </div>
        );
    }

    render() {
        const simplifiedPartName = simplifyPartName(this.props.skin.selectedPart);
        const isArmor = this.props.skin.armorLayer;
        const textures = this.props.textures;

        if (simplifiedPartName !== "none") {
            console.log(textures, Number(isArmor), simplifiedPartName);
            return (
                <div className="palette">
                    {Array.isArray(textures[Number(isArmor)][simplifiedPartName]) ?
                        textures[Number(isArmor)][simplifiedPartName].map((value) => this.showPaletteElement(value, simplifiedPartName)) :
                        Object.keys(textures[Number(isArmor)][simplifiedPartName]).map((key) => this.showPaletteElement(textures[Number(isArmor)][simplifiedPartName][key], simplifiedPartName))
                    }
                </div>
            )
        } else {
            return <div className="palette"/>
        }
    }
}

const mapStateToProps = (state) => ({
    skin: state.skin,
    textures: state.loadedTextures,
    isDev: state.other.isDev,
    selectedTextures: state.selectedTextures,
});

const mapDispatchToProps = (dispatch) => ({
    selectedTexturesActions: bindActionCreators(selectedTexturesActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
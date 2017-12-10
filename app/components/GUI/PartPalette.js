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

    showPaletteElement(partTextureData, index, simplifiedPartName) {
        const partName = this.props.skin.selectedPart;
        const isArmor = this.props.skin.armorLayer;
        const { selectedTextures } = this.props;
        const { selectLayerTexture } = this.props.selectedTexturesActions;

        const {path, scale, height, width} = partTextureData;

        return(
            <div
                className="paletteElement"
                key = {path + simplifiedPartName}

                onClick={() => {
                    let partLayerToChange = selectedTextures[partName];
                    partLayerToChange[Number(isArmor)] = index;
                    console.log(partName, partLayerToChange);
                    selectLayerTexture(partName, partLayerToChange);
                }}
            >
                <RenderElement
                    className="paletteElement"
                    key={path + "Preview"}

                    texturePath={path}
                    scale={scale}
                    simplifiedPartName={simplifiedPartName}
                />
                <div className="palette-element-data">{width}*{height}</div>
            </div>
        );
    }

    render() {
        const simplifiedPartName = simplifyPartName(this.props.skin.selectedPart);
        const isArmor = this.props.skin.armorLayer;
        const textures = this.props.textures;

        const partName = simplifiedPartName + (isArmor ? "Armor" : "");

        return simplifiedPartName !== "none" ?
            <div className="palette">
                {textures[partName].map((value, index) => this.showPaletteElement(value, index, simplifiedPartName))}
            </div> : <div className="palette"/>
    }
}

const mapStateToProps = (state) => ({
    skin: state.skin,
    textures: state.partData,
    isDev: state.other.isDev,
    selectedTextures: state.selectedTextures,
});

const mapDispatchToProps = (dispatch) => ({
    selectedTexturesActions: bindActionCreators(selectedTexturesActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
//React
import React, {Component, PropTypes} from 'react';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Components
import RenderElement from '../canvas-render/PaletteElementCanvasRender';
//Actions
import * as selectedTexturesActions from '../../actions/selectedTexturesActions';

class Palette extends Component {
    simplifyPartName(partName) {
        return partName.includes("left-") ? partName.slice(5) : partName.includes("right-") ? partName.slice(6) : partName;
    }

    showPaletteElement(textureName, simplifiedPartName) {
        const partName = this.props.skin.selectedPart;
        const layer = this.props.skin.armorLayer;
        const { selectedTextures } = this.props;
        const { selectLayerTexture } = this.props.selectedTexturesActions;

        return(
            <RenderElement
                className="paletteElement"
                key={textureName + "Preview"}
                textureName={textureName}
                partName={partName}
                onClick={() => {
                    let partLayerToChange = selectedTextures[partName];
                    partLayerToChange[Number(layer)] = textureName;
                    selectLayerTexture(partName, partLayerToChange);
                }}
            />
        );
    }

    render() {
        const simplifiedPartName = this.simplifyPartName(this.props.skin.selectedPart);
        const textures = this.props.textures;

        return(
            <div className="palette">
                {simplifiedPartName !== "none" ? textures[simplifiedPartName].map((value) => this.showPaletteElement(value, simplifiedPartName)) : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    skin: state.skin,
    textures: state.textures,
    selectedTextures: state.selectedTextures
});

const mapDispatchToProps = (dispatch) => ({
    selectedTexturesActions: bindActionCreators(selectedTexturesActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
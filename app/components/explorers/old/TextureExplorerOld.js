//React
import React, {Component, PropTypes} from 'react'
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Components
import RenderElement from '../../canvas-render/PaletteElementCanvasRender';
//Actions
import * as selectedTexturesActions from '../../../actions/selectedTexturesActions';
//Helpers
import simplifyPartName from '../../../helpers/simplifyPartName';


class TextureExplorer extends Component {
    constructor(props) {
        super(props);
        this.loadedParts = 0;
    }

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
        let { isLoadingData, loadedTextures, needToLoad } = this.props.overseer;
        const simplifiedPartName = simplifyPartName(this.props.skin.selectedPart);
        const isArmor = this.props.skin.armorLayer;
        const textures = this.props.textures;

        const partName = simplifiedPartName + (isArmor ? "Armor" : "");

        return simplifiedPartName !== "none" ?
            <div className="palette">
                { !isLoadingData ?
                    textures[partName].map((value, index) => this.showPaletteElement(value, index, simplifiedPartName)) :
                    <div className="part-loading-status">
                        <img src={(this.props.isDev ? "./img/" : "http://ariadna-rp.ru/skin-creator/img/") + "loading.gif"}/>
                        <div className="status" >{loadedTextures}/{needToLoad}</div>
                    </div>
                }
            </div> : <div className="palette"/>
    }
}

const mapStateToProps = (state) => ({
    skin: state.skin,
    textures: state.partData,
    isDev: state.other.isDev,
    selectedTextures: state.selectedTextures,
    overseer: state.overseer
});

const mapDispatchToProps = (dispatch) => ({
    selectedTexturesActions: bindActionCreators(selectedTexturesActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
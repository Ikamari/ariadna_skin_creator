//React
import React, {Component, PropTypes} from 'react';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Components
import { PalettePart } from './PalettePart';
//Actions
import * as selectedTexturesActions from '../../actions/selectedTexturesActions';

class Palette extends Component {
    render() {
        return(
            <div className="palette">
                <PalettePart/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    skin: state.skin,
    textures: state.textures
});

const mapDispatchToProps = (dispatch) => ({
    selectedTexturesActions: bindActionCreators(selectedTexturesActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
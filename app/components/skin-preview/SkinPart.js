import React, {Component, PropTypes} from 'react'
//Skin parts
// import HeadPart from './skin-parts/HeadPart'
// import BodyPart from './skin-parts/BodyPart'
// import HandPart from './skin-parts/HandPart'
// import LegPart from './skin-parts/LegPart'

//TODO: Back side support

export default class Preview extends Component {
    render() {
        let requiredPart = this.props.part;
        let requiredSide = this.props.side;

        console.log("Drawed " + requiredPart + "." + requiredSide);

        return(
            <canvas className={"skin-" + requiredPart + "-part"}/>
        )
    }
}
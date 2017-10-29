import React, {Component, PropTypes} from 'react';
//Skin parts
import HeadPart from './skin-parts/HeadPart';
import BodyPart from './skin-parts/BodyPart';
import HandPart from './skin-parts/HandPart';
import LegPart from './skin-parts/LegPart';

export default class Preview extends Component {
    render() {
        let requiredPart = this.props.part;
        let requiredSide = this.props.side;
        let requiredPairPart = this.props.pair;

        let className = this.props.pair ? "preview-" + requiredPairPart + '-' + requiredPart : "preview-" + requiredPart;
        className += " preview-part";

        console.log("Made div for " + requiredPart + "." + requiredSide);

        //TODO: onClick event + redux
        return(
            <div className={className}>{
                (requiredPart === "head") ? <HeadPart side={requiredSide}/> :
                    (requiredPart === "body") ? <BodyPart side={requiredSide}/> :
                        (requiredPart === "hand") ? <HandPart side={requiredSide}/> : <LegPart side={requiredSide}/>
            }</div>
        )
    }
}
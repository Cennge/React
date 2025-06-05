import React from "react";
import { Card } from './Cards';

export function Card(props) {
    return (
        <div className="card-design">
            <img
                src={props.newSevenWonders.imgUrl}
                alt={'photo' + props.newSevenWonders.name}
                className="card-image"
            />
            <h3>{props.newSevenWonders.name}</h3>
            <p>{props.newSevenWonders.description}</p>
        </div>
    )
}


export class Card extends React.Component {
    render() { 
        const { newSevenWonders } = this.props; 

        return (
            <div className="card-design">
                <img
                    src={newSevenWonders.imgUrl}
                    alt={'photo of ' + newSevenWonders.name}
                    className="card-image"
                />
                <h3>{newSevenWonders.name}</h3>
                <p>{newSevenWonders.description}</p>
            </div>
        );
    }
}

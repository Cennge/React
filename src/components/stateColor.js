import React from "react";
import "./stateColor.css";

export class StateColor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonText: "Light",
        };
        this.click = this.func.bind(this);
    }

    func() {
        if(this.state.buttonText === "Light") {
            this.setState({ buttonText: "Dark" });
        }
        else {
            this.setState({ buttonText: "Light" });
        }
    }
    
    render() {
        return (
            <div className="state-color-container">
                <button onClick={this.click} className="button-color">{this.state.buttonText}</button>
                <div className={`state-color ${this.state.buttonText}`}>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    };
}
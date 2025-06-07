import React from "react";
import "./club-info.css";

export class ClubInfo extends React.Component {
    render() {
        return (
            <div className={`club-info-container ${this.props.theme}`}>
            <img 
                className="club-emblem" 
                src="./logo.png" 
                alt="Герб клуба"
                width={120}
                height={120}
            />
            <h2 className="club-name">ФК Крутые Пацыки</h2>
            <p className="club-city"><strong>Город:</strong> Одесса</p>
            <p className="club-founded"><strong>Дата основания:</strong> 18 апреля 1122</p>
            <p className="club-stadium"><strong>Стадион:</strong> "Супер-Дупер Арена"</p>
            </div>
        );
    }
}
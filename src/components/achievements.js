import React from "react";
import "./achievements.css";

export class Achievements extends React.Component {
    render() {
        return (
            <div className={`achievements-container ${this.props.theme}`}>
            <div className="club-achievements">
                <h2>Достижения</h2>
                <ul>
                <li>Чемпион Одесской лиги — 2022, 2023</li>
                <li>Обладатель Кубка города — 2021</li>
                <li>Лучший клуб по посещаемости — 2023</li>
                <li>Рекорд по количеству забитых голов за сезон — 2022</li>
                <li>Победитель зимнего турнира — 2023</li>
                <li>Лучший тренер года — 2022</li>
                <li>Самая быстрая победа в истории лиги — 2023</li>
                <li>Вышли в высшую лигу — 2024</li>
                </ul>
            </div>
            </div>
        );
    }
}
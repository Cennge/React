import React from "react";
import "./current-team.css";

export class CurrentTeam extends React.Component {
    render() {
        return (
            <div className={`current-team-container ${this.props.theme}`}>
            <ul className="team-roster">
                <li>Вратарь: Иван "Стена" Петров</li>
                <br />
                <li>Защитник: Сергей "Бульдозер" Иванов</li>
                <li>Защитник: Алексей "Щит" Коваленко</li>
                <br />
                <li>Полузащитник: Дмитрий "Мозг" Сидоров</li>
                <li>Полузащитник: Артем "Двигатель" Григорьев</li>
                <li>Полузащитник: Павел "Маэстро" Орлов</li>
                <br />
                <li>Нападающий: Максим "Гол-машина" Кузнецов</li>
                <li>Нападающий: Владислав "Снайпер" Чернов</li>
                <br />
                <li>Капитан: Николай "Лидер" Васильев</li>
                <br />
                <li>Запасной: Егор "Универсал" Миронов</li>
                <li>Запасной: Антон "Скорость" Белый</li>
            </ul>
            </div>
        );
    }
}
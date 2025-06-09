import bsLogo from "../assets/bs-logo.png";

export function ClubInfo({ dark }: { dark: boolean }) {
    return (
        <div className={`m-1.5 border border-gray-300 p-4 rounded-2xl shadow-md ${dark ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
            <img src={bsLogo} alt="" />
            <h1 className="font-bold text-2xl">4epuha</h1>
            <p>Добро пожаловать в нашу киберспортивную команду по Brawl Stars! Здесь вы найдете информацию о тренировках, турнирах и вступлении в команду.</p>
            <ul>
                <li><strong>Вступление:</strong> Открыто для всех желающих игроков Brawl Stars.</li>
                <li><strong>Тренировки:</strong> Совместные тренировки онлайн несколько раз в неделю.</li>
                <li><strong>Турниры:</strong> Регулярное участие в онлайн-турнирах и лигах.</li>
                <li><strong>События:</strong> Внутрикомандные соревнования и стримы с профессионалами.</li>
            </ul>
            <button
                className="flex items-center mt-4 bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
            >
                Join
                <svg
                    className="w-5 h-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    ></path>
                </svg>
            </button>
        </div>
    );
}

export function ClubMembers({ dark }: { dark: boolean }) {
    const members = ["Илья", "Жека", "Ваня", "Максим"];
    return (
        <div className={`m-1.5 border border-gray-300 p-4 rounded-2xl shadow-md ${dark ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
            <h2 className="font-bold text-xl mb-2 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m10-5.13a4 4 0 1 0-8 0 4 4 0 0 0 8 0z" />
                </svg>
                Текущий состав
            </h2>
            <ul className="flex flex-col gap-2">
                {members.map((name, i) => (
                    <li
                        key={name}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg shadow-sm ${dark ? "bg-gray-800" : "bg-white"} hover:bg-indigo-950 transition`}
                    >
                        <span className="font-semibold text-blue-500">{i + 1}.</span>
                        <span>{name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function ClubAchievements({ dark }: { dark: boolean }) {
    const achievements = [
        { year: 2023, title: "Победа в онлайн-турнире Brawl Stars" },
        { year: 2024, title: "Вышли в финал региональной лиги" },
        { year: 2024, title: "Лучший командный результат сезона" },
    ];

    return (
        <div className={`m-1.5 border border-yellow-400 p-4 rounded-2xl shadow-md ${dark ? "bg-gray-800 text-yellow-200" : "bg-yellow-50 text-yellow-900"}`}>
            <h2 className="font-bold text-xl mb-2 flex items-center gap-2">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75L18.2 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.44 4.73L5.8 21z" />
                </svg>
                Достижения клуба
            </h2>
            <ul className="flex flex-col gap-2">
                {achievements.map((ach, i) => (
                    <li
                        key={i}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg shadow-sm ${dark ? "bg-gray-900" : "bg-white"} hover:bg-yellow-100 transition`}
                    >
                        <span className="font-semibold text-yellow-500">{ach.year}:</span>
                        <span>{ach.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
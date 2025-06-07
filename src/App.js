import React, { useState } from 'react';
import './App.css';
import { ClubInfo } from './components/club-info';
import { Achievements } from './components/achievements';
import { CurrentTeam } from './components/current-team';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className={`App ${theme}`}>
      <div className="header">
        <h1 className="header-title">ФК Крутые Пацыки</h1>
        <input type="checkbox" className="theme-checkbox" onClick={toggleTheme}></input>
      </div>

      <div className="body">
        <ClubInfo theme={theme} />
        <Achievements theme={theme} />    
        <CurrentTeam theme={theme} />    
      </div>

      <div className="footer">
        <p className="footer-text">© 2025 ФК Крутые Пацыки. Все права защищены.</p>
      </div>
    </div>
  );
}

export default App;

import './App.css'
import { useState } from 'react'
import { ClubInfo, ClubMembers, ClubAchievements } from './components/club-info'

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? "bg-neutral-900 text-white" : "bg-white text-black"} min-h-screen`}>
      <button
        className="m-4 px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 text-xs"
        onClick={() => setDark(d => !d)}
      >
        {dark ? "LIGHT" : "DARK"}
      </button>
      <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
        <ClubInfo dark={dark} />
        <ClubMembers dark={dark} />
        <ClubAchievements dark={dark}/>
      </div>
    </div>
  )
}

export default App
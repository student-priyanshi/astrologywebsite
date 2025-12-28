import React, { useState } from 'react'
import Hero from './components/Hero'
import ThreeScene from './components/ThreeScene'
import CharacterCreation from './components/CharacterCreation'
import Dashboard from './components/Dashboard'
import Forecast from './components/Forecast'
import GamesHub from './components/GamesHub'
import Multiplayer from './components/Multiplayer'
import Leaderboard from './components/Leaderboard'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [character, setCharacter] = useState({ name: 'Traveler', zodiac: 'aries', element: 'fire' })

  const onLogout = () => {
    setCharacter(null)
    setCurrentPage('home')
  }

  return (
    <div className="min-h-screen relative">
      {/* 3D background that sits behind content */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <ThreeScene />
      </div>
      {/* Top navbar (tabs + profile on right) */}
      <div className="fixed inset-x-0 top-0 z-40 p-4 flex items-center justify-between">
        <div className="bg-[#1A1531]/60 glass-effect rounded-full py-2 px-3 flex items-center gap-3">
          {['home','dashboard','forecast','games','multiplayer','leaderboard','character'].map(tab => (
            <button
              key={tab}
              onClick={() => setCurrentPage(tab)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                currentPage === tab ? 'bg-gradient-to-r from-[#B4A5F1] to-[#8B7FD4] text-[#1A1531]' : 'text-[#B0A6D6] hover:text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {character ? (
            <div className="flex items-center gap-3 bg-[#1A1531]/40 rounded-full py-2 px-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#B4A5F1] to-[#8B7FD4] rounded-full flex items-center justify-center font-bold text-[#1A1531]">
                {character.name ? character.name.charAt(0).toUpperCase() : 'C'}
              </div>
              <div className="hidden sm:flex flex-col text-right">
                <span className="font-medium text-[#B4A5F1]">{character.name || 'Traveler'}</span>
                <span className="text-xs text-[#B0A6D6]">{character.zodiac} • {character.element}</span>
              </div>
              <button onClick={onLogout} className="ml-2 px-3 py-1 rounded-full text-sm bg-[#2a203d] hover:bg-[#34263f] text-[#B0A6D6]">Logout</button>
            </div>
          ) : (
            <button onClick={() => setCurrentPage('character')} className="px-3 py-1 rounded-full bg-gradient-to-r from-[#B4A5F1] to-[#8B7FD4] text-[#1A1531]">Create</button>
          )}
        </div>
      </div>

      {/* Main content area (routes) */}
      <main className="relative z-10 pt-24">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait" initial={false}>
            {currentPage === 'home' && (
              <motion.div key="home" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
                <Hero setCurrentPage={setCurrentPage} />
              </motion.div>
            )}

            {currentPage === 'character' && (
              <motion.div key="character" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <CharacterCreation setCharacter={setCharacter} setCurrentPage={setCurrentPage} />
              </motion.div>
            )}

            {currentPage === 'dashboard' && (
              <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Dashboard character={character} setCurrentPage={setCurrentPage} />
              </motion.div>
            )}

            {currentPage === 'forecast' && (
              <motion.div key="forecast" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Forecast setCurrentPage={setCurrentPage} />
              </motion.div>
            )}

            {currentPage === 'games' && (
              <motion.div key="games" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <GamesHub setCurrentPage={setCurrentPage} />
              </motion.div>
            )}

            {currentPage === 'multiplayer' && (
              <motion.div key="multiplayer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Multiplayer setCurrentPage={setCurrentPage} />
              </motion.div>
            )}

            {currentPage === 'leaderboard' && (
              <motion.div key="leaderboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Leaderboard setCurrentPage={setCurrentPage} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}

export default App
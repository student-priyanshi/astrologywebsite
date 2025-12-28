import { motion } from 'framer-motion'
import { Home, Zap, Stars, Gamepad2, Users, Trophy, User, LogOut } from 'lucide-react'

const Navigation = ({ currentPage, setCurrentPage, character, onLogout }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: Zap },
    { id: 'forecast', label: 'Forecast', icon: Stars },
    { id: 'games', label: 'Games', icon: Gamepad2 },
    { id: 'multiplayer', label: 'Fusion', icon: Users },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'character', label: 'Character', icon: User },
  ]

  return (
    <motion.nav initial={{ x: -300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 100 }} className="fixed left-0 top-0 h-full w-64 bg-[#2d1f45]/90 backdrop-blur-xl border-r border-[#B4A5F1]/10 z-50">
      <div className="p-6 h-full flex flex-col">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#B4A5F1] to-[#8B7FD4] flex items-center justify-center">
              <Stars className="text-[#1A1531]" size={18} />
            </div>
            <h1 className="text-2xl font-bold text-[#B4A5F1]">Cosmic Destiny</h1>
          </div>
          <p className="text-sm text-[#B0A6D6] pl-12">Zodiac Gaming Platform</p>
        </div>

        {character && (
          <div className="mb-6 p-4 bg-[#1A1531]/50 rounded-xl border border-[#B4A5F1]/8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#B4A5F1] to-[#8B7FD4] rounded-full flex items-center justify-center font-bold text-[#1A1531]">
                {character.name ? character.name.charAt(0).toUpperCase() : 'C'}
              </div>
              <div>
                <h3 className="font-bold text-[#B4A5F1]">{character.name || 'Traveler'}</h3>
                <p className="text-sm text-[#B0A6D6] capitalize">{character.zodiac} • {character.element}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex-1 space-y-2">
          {navItems.map(({ id, label, icon: Icon }) => (
            <motion.button key={id} whileHover={{ x: 8 }} onClick={() => setCurrentPage(id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${currentPage === id ? 'bg-gradient-to-r from-[#B4A5F1] to-[#8B7FD4] text-[#1A1531]' : 'text-[#B0A6D6] hover:text-white'}`}>
              <Icon size={18} />
              <span className="font-medium">{label}</span>
            </motion.button>
          ))}
        </div>

        {character && (
          <motion.button whileHover={{ x: 6 }} onClick={onLogout} className="mt-6 flex items-center gap-3 px-4 py-3 text-[#B0A6D6] hover:text-white hover:bg-[#1A1531]/30 rounded-xl transition-all border border-[#B4A5F1]/8">
            <LogOut size={16} />
            <span className="font-medium">Logout</span>
          </motion.button>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation
import { motion } from 'framer-motion'
import { Star, Sparkles, ChevronRight } from 'lucide-react'

function Dashboard({ character, setCurrentPage }) {
  const quests = [
    { id: 1, title: 'Mercury Rising', description: 'A communication quest awaits', reward: 500, icon: '📡' },
    { id: 2, title: 'Lunar Echo', description: 'Connect with your inner moon', reward: 750, icon: '🌙' },
    { id: 3, title: 'Solar Burst', description: 'Harness the sun\'s energy', reward: 1000, icon: '☀️' },
  ]

  return (
    <section className="min-h-screen py-12">
      <div className="glass-effect rounded-2xl p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-[#B4A5F1]">Welcome, <span className="text-gradient">{character?.name || 'Traveler'}</span></h1>
            <p className="text-[#B0A6D6] mt-2 capitalize">{character?.zodiac} • {character?.element} Element</p>
          </div>
          <div className="text-6xl animate-float">🌟</div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glass-effect rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Star className="text-[#B4A5F1]" size={26} />
              <h2 className="text-2xl font-bold text-[#B4A5F1]">Level 1</h2>
            </div>
            <div className="w-full bg-[#1A1531] rounded-full h-3 mb-3">
              <motion.div initial={{ width: 0 }} animate={{ width: "25%" }} transition={{ duration: 1 }} className="bg-gradient-to-r from-[#B4A5F1] to-[#8B7FD4] h-3 rounded-full"></motion.div>
            </div>
            <p className="text-[#B0A6D6]">250 XP / 1000 XP</p>
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glass-effect rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-[#B4A5F1]" size={26} />
              <h2 className="text-2xl font-bold text-[#B4A5F1]">Cosmic Streak</h2>
            </div>
            <p className="text-5xl font-bold text-gradient mb-2">7 Days</p>
            <p className="text-[#B0A6D6]">Keep your cosmic momentum!</p>
          </motion.div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#B4A5F1] mb-4">Daily Cosmic Quests</h2>
          <div className="space-y-4">
            {quests.map((quest, index) => (
              <motion.div key={quest.id} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.12 }} className="glass-effect rounded-2xl p-6 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{quest.icon}</span>
                    <h3 className="text-xl font-bold text-[#B4A5F1]">{quest.title}</h3>
                  </div>
                  <p className="text-[#B0A6D6]">{quest.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#B4A5F1] font-semibold">+{quest.reward} XP</p>
                  <button onClick={() => alert('Playing quest...')} className="mt-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#B4A5F1] to-[#8B7FD4] text-[#1A1531]">Play <ChevronRight size={14} /></button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
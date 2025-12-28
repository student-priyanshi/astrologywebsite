import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ChevronRight, ChevronLeft } from 'lucide-react'

function CharacterCreation({ setCharacter, setCurrentPage }) {
  const [step, setStep] = useState(0)
  const [character, setCharacterData] = useState({
    name: '',
    zodiac: 'aries',
    element: 'fire',
  })

  const zodiacSigns = [
    { name: 'Aries', value: 'aries', symbol: '♈', element: 'fire', color: 'from-red-500/20 to-orange-500/20' },
    { name: 'Taurus', value: 'taurus', symbol: '♉', element: 'earth', color: 'from-emerald-500/20 to-green-500/20' },
    { name: 'Gemini', value: 'gemini', symbol: '♊', element: 'air', color: 'from-yellow-500/20 to-amber-500/20' },
    { name: 'Cancer', value: 'cancer', symbol: '♋', element: 'water', color: 'from-blue-500/20 to-cyan-500/20' },
    { name: 'Leo', value: 'leo', symbol: '♌', element: 'fire', color: 'from-orange-500/20 to-yellow-500/20' },
    { name: 'Virgo', value: 'virgo', symbol: '♍', element: 'earth', color: 'from-green-500/20 to-emerald-500/20' },
    { name: 'Libra', value: 'libra', symbol: '♎', element: 'air', color: 'from-pink-500/20 to-rose-500/20' },
    { name: 'Scorpio', value: 'scorpio', symbol: '♏', element: 'water', color: 'from-purple-500/20 to-violet-500/20' },
    { name: 'Sagittarius', value: 'sagittarius', symbol: '♐', element: 'fire', color: 'from-purple-500/20 to-pink-500/20' },
    { name: 'Capricorn', value: 'capricorn', symbol: '♑', element: 'earth', color: 'from-gray-500/20 to-slate-500/20' },
    { name: 'Aquarius', value: 'aquarius', symbol: '♒', element: 'air', color: 'from-cyan-500/20 to-blue-500/20' },
    { name: 'Pisces', value: 'pisces', symbol: '♓', element: 'water', color: 'from-indigo-500/20 to-purple-500/20' },
  ]

  const handleZodiacSelect = (zodiac) => {
    const selectedZodiac = zodiacSigns.find(z => z.value === zodiac)
    setCharacterData({
      ...character,
      zodiac,
      element: selectedZodiac.element,
    })
  }

  const handleComplete = () => {
    if (character.name && character.zodiac) {
      setCharacter(character)
      setCurrentPage('dashboard')
    }
  }

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex items-center justify-center py-12">
      <div className="max-w-4xl w-full">
        <motion.div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-[#B4A5F1]" size={28} />
            <h1 className="text-4xl font-bold text-[#B4A5F1]">Create Your Cosmic Character</h1>
          </div>
          <p className="text-[#B0A6D6] text-lg">Step {step + 1} of 2</p>
        </motion.div>

        <div className="glass-effect rounded-2xl p-6 border border-[#B4A5F1]/12">
          {step === 0 && (
            <div className="space-y-6">
              <div>
                <label className="block text-[#B4A5F1] text-lg font-semibold mb-3">Your Cosmic Name</label>
                <input value={character.name} onChange={(e) => setCharacterData({ ...character, name: e.target.value })} placeholder="Enter your cosmic name" className="w-full px-4 py-3 bg-[#1A1531] border border-[#B4A5F1]/12 rounded-xl text-[#B4A5F1]" />
                <p className="mt-2 text-sm text-[#B0A6D6]">Choose a name that reflects your celestial spirit</p>
              </div>

              <div className="flex gap-4">
                <button disabled={!character.name} onClick={() => setStep(1)} className="flex-1 bg-gradient-to-r from-[#B4A5F1] to-[#8B7FD4] text-[#1A1531] py-3 rounded-xl font-semibold">Continue <ChevronRight /></button>
                <button onClick={() => setCurrentPage('home')} className="flex-1 bg-[#2d1f45] text-[#B4A5F1] py-3 rounded-xl">Cancel</button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-[#B4A5F1] text-lg font-semibold mb-4">Select Your Zodiac Sign</label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {zodiacSigns.map((zodiac) => (
                    <button key={zodiac.value} onClick={() => handleZodiacSelect(zodiac.value)} className={`p-3 rounded-xl border transition ${character.zodiac === zodiac.value ? 'border-[#B4A5F1] bg-[#B4A5F1]/6' : 'border-[#B4A5F1]/8'}`}>
                      <div className="text-2xl mb-1">{zodiac.symbol}</div>
                      <div className="text-sm text-[#B4A5F1]">{zodiac.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <button disabled={!character.name || !character.zodiac} onClick={handleComplete} className="w-full bg-gradient-to-r from-[#B4A5F1] via-[#8B7FD4] to-[#B4A5F1] text-[#1A1531] py-3 rounded-xl font-bold">✨ Create Cosmic Character</button>
                <button onClick={() => setStep(0)} className="w-full bg-[#2d1f45] text-[#B4A5F1] py-3 rounded-xl">Back to Name</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  )
}

export default CharacterCreation
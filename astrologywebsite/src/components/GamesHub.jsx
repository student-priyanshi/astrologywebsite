import { ArrowLeft, Zap, Music, Sword } from 'lucide-react'

function GamesHub({ setCurrentPage }) {
  const games = [
    { title: 'Astro Runner', description: 'Navigate cosmic obstacles', icon: Zap, color: 'from-blue-500/20 to-purple-500/20' },
    { title: 'Cosmic Fusion', description: 'Combine zodiac powers', icon: Zap, color: 'from-purple-500/20 to-pink-500/20' },
    { title: 'Astro Music', description: 'Rhythm meets cosmos', icon: Music, color: 'from-pink-500/20 to-red-500/20' },
    { title: 'Boss Battles', description: 'Cosmic challenges await', icon: Sword, color: 'from-orange-500/20 to-red-500/20', locked: true },
  ]

  return (
    <section className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto">
        <button onClick={() => setCurrentPage('home')} className="mb-6 text-[#B4A5F1]">← Back</button>
        <div className="grid md:grid-cols-2 gap-6">
          {games.map((game) => {
            const Icon = game.icon
            return (
              <div key={game.title} className={`p-6 rounded-2xl border border-[#B4A5F1]/8 glass-effect ${game.locked ? 'opacity-60' : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#B4A5F1]">{game.title}</h3>
                    <p className="text-[#B0A6D6]">{game.description}</p>
                  </div>
                  <Icon className="text-[#B4A5F1]" size={28} />
                </div>
                <button disabled={game.locked} className={`w-full py-3 rounded-lg font-semibold ${game.locked ? 'bg-[#B0A6D6]/20 text-[#B0A6D6]' : 'bg-[#B4A5F1] text-[#1A1531]'}`}>{game.locked ? 'Locked' : 'Play Now'}</button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default GamesHub
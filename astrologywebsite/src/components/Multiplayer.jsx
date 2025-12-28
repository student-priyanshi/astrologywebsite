import { ArrowLeft, Plus, Users } from 'lucide-react'

function Multiplayer({ setCurrentPage }) {
  const players = [
    { id: 1, name: 'Luna Starlight', zodiac: 'Pisces', level: 12 },
    { id: 2, name: 'Solar Knight', zodiac: 'Leo', level: 15 },
    { id: 3, name: 'Nova Eclipse', zodiac: 'Scorpio', level: 11 },
    { id: 4, name: 'Stellar Sage', zodiac: 'Gemini', level: 13 },
  ]

  return (
    <section className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto">
        <button onClick={() => setCurrentPage('home')} className="mb-6 text-[#B4A5F1]">← Back</button>
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#B4A5F1]">Cosmic Fusion</h1>
          <p className="text-[#B0A6D6]">Connect and battle with other cosmic adventurers</p>
        </div>

        <div className="mb-6 flex gap-3">
          <button className="px-4 py-2 bg-[#B4A5F1] text-[#1A1531] rounded-lg flex items-center gap-2"><Plus /> Find Player</button>
          <button className="px-4 py-2 bg-[#2d1f45] text-[#B4A5F1] rounded-lg">Create Room</button>
        </div>

        <div className="space-y-4">
          {players.map((player) => (
            <div key={player.id} className="glass-effect rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B4A5F1] to-[#8B7FD4] flex items-center justify-center text-[#1A1531]">
                  <Users />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#B4A5F1]">{player.name}</h3>
                  <p className="text-[#B0A6D6] text-sm">{player.zodiac} • Level {player.level}</p>
                </div>
              </div>
              <button className="bg-[#B4A5F1] text-[#1A1531] px-4 py-2 rounded-full">Battle</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Multiplayer
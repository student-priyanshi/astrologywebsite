import { ArrowLeft, Trophy, Crown } from 'lucide-react';

function Leaderboard({ setCurrentPage }) {
  const leaderboardData = [
    { rank: 1, name: 'Cosmic Ruler', level: 50, xp: 125000, streak: 90 },
    { rank: 2, name: 'Stellar Master', level: 48, xp: 118500, streak: 75 },
    { rank: 3, name: 'Nebula Knight', level: 47, xp: 112000, streak: 68 },
    { rank: 4, name: 'Solar Sage', level: 45, xp: 105200, streak: 55 },
    { rank: 5, name: 'Luna Mystic', level: 44, xp: 98700, streak: 42 },
  ];

  return (
    <section className="min-h-screen bg-[#1A1531] pb-24">
      <div className="container mx-auto px-6 py-8">
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-2 text-[#B4A5F1] mb-8 hover:text-[#C5B8F5] transition-colors"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="text-[#B4A5F1]" size={32} />
            <h1 className="text-4xl font-bold text-[#B4A5F1]">Leaderboard</h1>
          </div>
          <p className="text-[#B0A6D6] text-lg">Top cosmic adventurers and their cosmic streaks</p>
        </div>

        <div className="space-y-4 mb-12">
          {leaderboardData.map((player) => (
            <div
              key={player.rank}
              className={`rounded-xl p-6 border backdrop-blur transition-all ${
                player.rank === 1
                  ? 'bg-gradient-to-r from-[#B4A5F1]/20 to-[#8B7FD4]/20 border-[#B4A5F1]/50'
                  : 'bg-[#2d1f45] border-[#B4A5F1]/20 hover:border-[#B4A5F1]/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                      player.rank === 1
                        ? 'bg-[#B4A5F1] text-[#1A1531]'
                        : player.rank <= 3
                        ? 'bg-[#B4A5F1]/30 text-[#B4A5F1]'
                        : 'bg-[#B0A6D6]/20 text-[#B0A6D6]'
                    }`}
                  >
                    {player.rank === 1 ? <Crown size={20} /> : player.rank}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#B4A5F1]">{player.name}</h3>
                    <p className="text-[#B0A6D6] text-sm">Level {player.level}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#B4A5F1] font-bold">{player.xp.toLocaleString()} XP</p>
                  <p className="text-[#B0A6D6] text-sm">Streak: {player.streak} days</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#2d1f45] rounded-2xl p-8 border border-[#B4A5F1]/20 backdrop-blur">
          <h2 className="text-xl font-bold text-[#B4A5F1] mb-4">Your Ranking</h2>
          <div className="flex items-center gap-4 pb-6 border-b border-[#B4A5F1]/20">
            <div className="w-16 h-16 bg-gradient-to-br from-[#B4A5F1] to-[#8B7FD4] rounded-full flex items-center justify-center text-2xl font-bold text-[#1A1531]">
              127
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#B4A5F1]">Your Profile</h3>
              <p className="text-[#B0A6D6]">50,000 XP • 15 day streak</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#B4A5F1]">25</p>
              <p className="text-[#B0A6D6] text-sm">Rank</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#B4A5F1]">35</p>
              <p className="text-[#B0A6D6] text-sm">Level</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#B4A5F1]">78</p>
              <p className="text-[#B0A6D6] text-sm">Battles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leaderboard;

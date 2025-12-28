import { ArrowLeft, Share2 } from 'lucide-react'

function Forecast({ setCurrentPage }) {
  return (
    <section className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => setCurrentPage('home')} className="mb-6 text-[#B4A5F1] flex items-center gap-2">← Back</button>
        <div className="glass-effect p-8 rounded-2xl">
          <h1 className="text-3xl font-bold text-[#B4A5F1] mb-2">Your Cosmic Forecast</h1>
          <p className="text-[#B0A6D6] mb-6">AI-powered predictions tailored to your zodiac</p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#2d1f45] p-6 rounded-xl border border-[#B4A5F1]/8">
              <h3 className="font-bold text-[#B4A5F1] mb-2">Today's Energy</h3>
              <p className="text-[#B0A6D6]">The cosmic alignment brings a surge of creative energy. This is an ideal time to pursue new ventures and express your unique vision.</p>
            </div>

            <div className="bg-[#2d1f45] p-6 rounded-xl border border-[#B4A5F1]/8">
              <h3 className="font-bold text-[#B4A5F1] mb-2">Cosmic Influences</h3>
              <div className="space-y-2 text-[#B0A6D6]">
                <div className="flex justify-between"><span>Mercury Direct</span><span className="text-[#B4A5F1]">+5% Communication</span></div>
                <div className="flex justify-between"><span>Venus Rising</span><span className="text-[#B4A5F1]">+7% Charm</span></div>
                <div className="flex justify-between"><span>Mars Ascending</span><span className="text-[#B4A5F1]">+6% Strength</span></div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-[#B4A5F1] text-[#1A1531] py-3 rounded-xl flex items-center justify-center gap-2"><Share2 /> Share Forecast</button>
            <button onClick={() => alert('Generate personalized AI forecast (demo)')} className="flex-1 bg-[#2d1f45] text-[#B4A5F1] py-3 rounded-xl">Generate AI Forecast</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Forecast
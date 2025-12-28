import { motion } from 'framer-motion'
import { ChevronRight, Moon, Sparkles, Star } from 'lucide-react'
import { useEffect, useRef } from 'react'

const zodiacSigns = [
  { name: 'Aries', value: 'aries', symbol: '♈', color: 'from-red-500/20 to-orange-400/10' },
  { name: 'Taurus', value: 'taurus', symbol: '♉', color: 'from-emerald-400/20 to-green-400/10' },
  { name: 'Gemini', value: 'gemini', symbol: '♊', color: 'from-yellow-400/20 to-amber-400/10' },
  { name: 'Cancer', value: 'cancer', symbol: '♋', color: 'from-blue-400/20 to-cyan-400/10' },
  { name: 'Leo', value: 'leo', symbol: '♌', color: 'from-orange-400/20 to-yellow-400/10' },
  { name: 'Virgo', value: 'virgo', symbol: '♍', color: 'from-green-400/20 to-emerald-400/10' },
  { name: 'Libra', value: 'libra', symbol: '♎', color: 'from-pink-400/20 to-rose-400/10' },
  { name: 'Scorpio', value: 'scorpio', symbol: '♏', color: 'from-purple-400/20 to-violet-400/10' },
  { name: 'Sagittarius', value: 'sagittarius', symbol: '♐', color: 'from-purple-400/20 to-pink-400/10' },
  { name: 'Capricorn', value: 'capricorn', symbol: '♑', color: 'from-gray-400/20 to-slate-400/10' },
  { name: 'Aquarius', value: 'aquarius', symbol: '♒', color: 'from-cyan-400/20 to-blue-400/10' },
  { name: 'Pisces', value: 'pisces', symbol: '♓', color: 'from-indigo-400/20 to-purple-400/10' },
]

const HoroscopeWheel = () => {
  const wheelRef = useRef(null)

  useEffect(() => {
    // Smooth continuous rotation
    let rotation = 0
    const rotateWheel = () => {
      rotation += 0.1
      if (wheelRef.current) {
        wheelRef.current.style.transform = `rotate(${rotation}deg)`
      }
      requestAnimationFrame(rotateWheel)
    }
    
    const animationId = requestAnimationFrame(rotateWheel)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="absolute top-0 right-0 w-1/2 h-1/2 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/4 -right-1/4 w-full h-full">
        <div ref={wheelRef} className="relative w-[600px] h-[600px]">
          {/* Glowing outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-[#B4A5F1]/10 shadow-[0_0_60px_rgba(180,165,241,0.15)]" />
          
          {/* Zodiac segments */}
          {zodiacSigns.map((sign, i) => {
            const angle = (i / zodiacSigns.length) * 360
            return (
              <div
                key={sign.value}
                className="absolute left-1/2 top-1/2 origin-center"
                style={{
                  transform: `rotate(${angle}deg) translateY(-250px)`,
                }}
              >
                <div className="relative">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${sign.color} flex items-center justify-center text-2xl text-white/80 backdrop-blur-sm border border-white/10`}>
                    {sign.symbol}
                  </div>
                </div>
              </div>
            )
          })}

          {/* Center gem with glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#B4A5F1] to-[#8B7FD4] flex items-center justify-center shadow-[0_0_80px_rgba(180,165,241,0.3)]">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-white/30 to-transparent flex items-center justify-center">
                <Star className="text-white w-12 h-12" fill="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Hero = ({ setCurrentPage }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f0b1a] via-[#1a1531] to-[#0f0b1a] overflow-hidden">
      {/* Animated star background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glowing orb effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 pt-24">
        <div className="max-w-3xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-2 rounded-lg bg-gradient-to-br from-[#B4A5F1]/20 to-[#8B7FD4]/10 border border-[#B4A5F1]/20">
              <Moon className="w-6 h-6 text-[#B4A5F1]" />
            </div>
            <span className="text-lg font-medium bg-gradient-to-r from-[#B4A5F1] to-[#8B7FD4] bg-clip-text text-transparent">
              Celestial Insights
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl md:text-7xl font-bold mb-6"
          >
            <span className="text-white">Unlock Your</span>
            <br />
            <span className="bg-gradient-to-r from-[#B4A5F1] via-[#8B7FD4] to-[#B4A5F1] bg-clip-text text-transparent">
              Cosmic Potential
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-300/80 mb-10 max-w-2xl leading-relaxed"
          >
            Discover personalized horoscope readings, daily guidance, and mystical insights 
            tailored to your zodiac sign. Embrace the celestial wisdom that awaits you.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('character')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#B4A5F1] to-[#8B7FD4] text-white font-semibold text-lg shadow-[0_0_40px_rgba(180,165,241,0.3)] flex items-center gap-3 group"
            >
              <Sparkles className="w-5 h-5" />
              Explore Your Sign
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('forecast')}
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              View Daily Forecast
            </motion.button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: '✨', title: 'AI-Powered Insights', desc: 'Personalized readings using advanced astrology algorithms' },
              { icon: '📅', title: 'Daily Updates', desc: 'Fresh horoscope predictions updated every 24 hours' },
              { icon: '🔮', title: 'Mystical Guidance', desc: 'Deep spiritual insights and cosmic advice' },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-[#B4A5F1]/30 transition-colors"
              >
                <div className="text-2xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Floating elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="fixed bottom-8 left-8 flex items-center gap-3 text-sm text-gray-400"
          >
            <div className="w-2 h-2 rounded-full bg-[#B4A5F1] animate-pulse" />
            <span>Live cosmic energy readings</span>
          </motion.div>
        </div>
      </div>

      {/* Half-visible rotating zodiac wheel */}
      <HoroscopeWheel />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b1a] via-transparent to-transparent pointer-events-none" />
    </div>
  )
}

export default Hero
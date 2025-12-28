import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const zodiacSigns = [
  { name: 'Aries', symbol: '♈' },
  { name: 'Taurus', symbol: '♉' },
  { name: 'Gemini', symbol: '♊' },
  { name: 'Cancer', symbol: '♋' },
  { name: 'Leo', symbol: '♌' },
  { name: 'Virgo', symbol: '♍' },
  { name: 'Libra', symbol: '♎' },
  { name: 'Scorpio', symbol: '♏' },
  { name: 'Sagittarius', symbol: '♐' },
  { name: 'Capricorn', symbol: '♑' },
  { name: 'Aquarius', symbol: '♒' },
  { name: 'Pisces', symbol: '♓' },
]

export default function HoroscopeWheel() {
  const wheelRef = useRef(null)

  useEffect(() => {
    let angle = 0
    const id = setInterval(() => {
      angle += 0.1
      if (wheelRef.current) {
        wheelRef.current.style.transform = `rotate(${angle}deg)`
      }
    }, 30)
    return () => clearInterval(id)
  }, [])

  return (
    /* 🔒 FULL HEIGHT CONTAINER (NO BOTTOM CUT) */
    <div className="absolute inset-y-0 right-0 w-[420px] pointer-events-none">
      
      {/* 🎭 HALF MASK (RIGHT SIDE ONLY) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)',
        }}
      >
        {/* 🔄 FULL ROTATING WHEEL */}
        <div
          ref={wheelRef}
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[520px] h-[520px]
          rounded-full border-2 border-[#B4A5F1]/20 shadow-[0_0_60px_rgba(180,165,241,0.25)]"
        >
          {/* Background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#20133a] to-[#2d1f45]" />

          {/* Zodiac icons */}
          {zodiacSigns.map((z, i) => {
            const angle = (i / zodiacSigns.length) * 360
            return (
              <div
                key={z.name}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateY(-240px)`,
                  transformOrigin: 'center',
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 rounded-full bg-[#0f0b1a]/70
                  border border-[#B4A5F1]/20 text-[#B4A5F1]
                  flex items-center justify-center text-xl backdrop-blur-sm"
                >
                  {z.symbol}
                </motion.div>
              </div>
            )
          })}

          {/* Center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br
            from-[#B4A5F1] to-[#8B7FD4]
            flex items-center justify-center text-[#1A1531]
            font-bold shadow-[0_0_40px_rgba(180,165,241,0.4)]">
              ✨
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

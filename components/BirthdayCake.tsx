'use client'

import { useState } from 'react'

export default function BirthdayCake() {
  const [isBlowingCandles, setIsBlowingCandles] = useState(false)

  const handleBlowCandles = () => {
    setIsBlowingCandles(true)
    setTimeout(() => setIsBlowingCandles(false), 3000)
  }

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Cake Container */}
      <div className="relative">
        {/* Cake Base */}
        <div className="w-64 h-40 bg-gradient-to-b from-orange-300 via-orange-400 to-orange-500 rounded-b-3xl shadow-2xl relative overflow-hidden border-4 border-orange-600">
          {/* Frosting waves */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-pink-200 rounded-b-full opacity-70" />
          <div className="absolute top-6 left-0 right-0 h-6 bg-pink-100 rounded-b-full opacity-60" />

          {/* Cake layers */}
          <div className="absolute top-16 left-4 right-4 h-6 bg-orange-600 opacity-40" />
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-orange-700 opacity-60" />

          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute h-1 bg-pink-300"
                style={{
                  width: '80%',
                  left: '10%',
                  top: `${20 + i * 16}px`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Candles */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex gap-8">
          {[0, 1, 2].map((index) => (
            <div key={index} className="relative">
              {/* Candle stick */}
              <div className="w-2 h-12 bg-yellow-100 border border-yellow-300 rounded-full mx-auto" />

              {/* Flame */}
              {!isBlowingCandles && (
                <div
                  className="absolute w-3 h-8 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full top-0 left-1/2 transform -translate-x-1/2 animate-pulse shadow-lg"
                  style={{
                    boxShadow: '0 0 10px rgba(255, 140, 0, 0.8)',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Instruction and Button */}
      <div className="text-center space-y-4">
        <p className="text-pink-600 font-semibold text-lg glow-text">
          Make a wish! 🎂
        </p>
        <button
          onClick={handleBlowCandles}
          disabled={isBlowingCandles}
          className="px-8 py-3 bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 disabled:from-pink-300 disabled:to-rose-300 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
        >
          {isBlowingCandles ? '✨ Blowing Candles...' : '🌬️ Blow Candles'}
        </button>

        {isBlowingCandles && (
          <div className="text-4xl animate-bounce">
            🎉✨🎊
          </div>
        )}
      </div>
    </div>
  )
}

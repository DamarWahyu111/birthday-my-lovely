'use client'

import { useState } from 'react'

export default function BirthdayMessage() {
  const [isExpanded, setIsExpanded] = useState(false)

  const messages = [
    "On this special day, I celebrate you and all the joy you bring into my life.",
    "Every moment with you is a gift. Happy Birthday to my one true love! 💕",
    "Thank you for being the sunshine that brightens my every day.",
  ]

  return (
    <div
      className="fade-in-up max-w-2xl mx-auto px-6 py-8 md:py-12 rounded-3xl bg-white/30 backdrop-blur-md border-2 border-pink-200 shadow-2xl cursor-pointer hover:shadow-3xl transition-all duration-300"
      style={{ animationDelay: '0.3s' }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-pink-600">
          A Message For You
        </h2>

        <div className="space-y-4">
          {messages.map((message, index) => (
            <p
              key={index}
              className="text-lg md:text-xl text-pink-700 leading-relaxed fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              {message}
            </p>
          ))}
        </div>

        <div className="flex gap-3 justify-center pt-4 fade-in-up" style={{ animationDelay: '1.1s' }}>
          <span className="text-3xl animate-bounce">💕</span>
          <span className="text-3xl animate-bounce" style={{ animationDelay: '0.1s' }}>
            🎂
          </span>
          <span className="text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>
            ✨
          </span>
        </div>

        <button
          className="mt-6 px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          onClick={(e) => {
            e.stopPropagation()
            setIsExpanded(!isExpanded)
          }}
        >
          {isExpanded ? 'Hide' : 'Read More'}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-8 pt-8 border-t-2 border-pink-200 space-y-4 fade-in-up">
          <p className="text-lg text-pink-700 leading-relaxed italic">
            "From the moment I met you, I knew you were special. Your smile brightens even my darkest days, and your love has transformed my life in ways I never thought possible."
          </p>
          <p className="text-lg text-pink-700 leading-relaxed italic">
            "I&apos;m grateful for every laugh, every hug, and every moment we share together. You are my greatest blessing and my forever love."
          </p>
          <p className="text-xl font-semibold text-pink-600 mt-6">
            Forever Yours ❤️
          </p>
        </div>
      )}
    </div>
  )
}

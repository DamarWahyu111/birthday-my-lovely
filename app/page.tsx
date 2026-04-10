'use client'

import { useEffect, useRef, useState } from 'react'
import FallingHearts from '@/components/FallingHearts'
import FloatingBalloons from '@/components/FloatingBalloons'
import BirthdayMessage from '@/components/BirthdayMessage'
import BirthdayCake from '@/components/BirthdayCake'

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    // Auto-play music on first interaction
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().catch(() => {
          // Browser may block autoplay
          console.log('Autoplay prevented')
        })
        setIsPlaying(true)
      }
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('touchstart', handleFirstInteraction)
    }

    document.addEventListener('click', handleFirstInteraction)
    document.addEventListener('touchstart', handleFirstInteraction)

    return () => {
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('touchstart', handleFirstInteraction)
    }
  }, [isPlaying])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <main className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-pink-50 to-pink-100">
      {/* Hidden audio element for background music */}
      <audio
        ref={audioRef}
        loop
        className="hidden"
      >
        <source src="data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAAA=" type="audio/wav" />
      </audio>

      {/* Falling Hearts */}
      <FallingHearts />

      {/* Floating Balloons */}
      <FloatingBalloons />

      {/* Main Content */}
      <div className="relative z-10 w-full h-full overflow-y-auto scrollbar-hide">
        <div className="min-h-full flex flex-col items-center justify-center px-4 py-12">
          {/* Main Heading */}
          <div className="text-center mb-8 fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-pink-600 glow-text mb-4 mt-8 md:mt-0">
              Happy Birthday
            </h1>
            <p className="text-3xl md:text-4xl text-pink-500 glow-text">
              My Love
            </p>
          </div>

          {/* Romantic Message */}
          <BirthdayMessage />

          {/* Birthday Cake */}
          <div className="mt-12 fade-in-up mb-16" style={{ animationDelay: '0.6s' }}>
            <BirthdayCake />
          </div>
        </div>

        {/* Music Control */}
        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 bg-pink-500 hover:bg-pink-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <rect x="3" y="2" width="4" height="16" />
              <rect x="13" y="2" width="4" height="16" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          )}
        </button>
      </div>
    </main>
  )
}

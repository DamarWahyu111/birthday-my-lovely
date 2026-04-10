'use client'

import { useEffect, useState } from 'react'

interface Balloon {
  id: string
  left: string
  delay: number
  duration: number
  color: string
}

const balloonColors = ['text-red-500', 'text-pink-500', 'text-rose-500', 'text-fuchsia-500']

export default function FloatingBalloons() {
  const [balloons, setBalloons] = useState<Balloon[]>([])

  useEffect(() => {
    const generateBalloons = () => {
      const newBalloons: Balloon[] = []
      const balloonCount = 6

      for (let i = 0; i < balloonCount; i++) {
        newBalloons.push({
          id: `balloon-${Date.now()}-${i}`,
          left: Math.random() * 100 + '%',
          delay: Math.random() * 2,
          duration: 8 + Math.random() * 4,
          color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
        })
      }

      setBalloons((prev) => [...prev, ...newBalloons])
    }

    // Initial batch
    generateBalloons()

    // Add balloons periodically
    const interval = setInterval(generateBalloons, 3000)

    // Clean up old balloons
    const cleanup = setInterval(() => {
      setBalloons((prev) => {
        if (prev.length > 30) {
          return prev.slice(-20)
        }
        return prev
      })
    }, 4000)

    return () => {
      clearInterval(interval)
      clearInterval(cleanup)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="relative select-none"
          style={{
            left: balloon.left,
            bottom: '-2rem',
            position: 'fixed',
          }}
        >
          {/* Balloon */}
          <div
            className={`${balloon.color} float-balloon`}
            style={{
              animation: `floatBalloon ${balloon.duration}s ease-in-out forwards`,
              animationDelay: `${balloon.delay}s`,
              width: '2rem',
              height: '2.5rem',
              borderRadius: '50% 50% 50% 40%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              lineHeight: 1,
              opacity: 0.9,
            }}
          >
            🎈
          </div>
          
          {/* String */}
          <div
            className="absolute w-0.5 bg-gray-400 left-1/2 transform -translate-x-1/2"
            style={{
              height: '2rem',
              top: '100%',
              opacity: 0.6,
            }}
          />
        </div>
      ))}
    </div>
  )
}

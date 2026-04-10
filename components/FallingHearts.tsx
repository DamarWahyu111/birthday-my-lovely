'use client'

import { useEffect, useState } from 'react'

interface Heart {
  id: string
  left: string
  delay: number
  duration: number
  size: string
}

export default function FallingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: Heart[] = []
      const heartCount = 20

      for (let i = 0; i < heartCount; i++) {
        newHearts.push({
          id: `heart-${Date.now()}-${i}`,
          left: Math.random() * 100 + '%',
          delay: Math.random() * 2,
          duration: 6 + Math.random() * 4,
          size: ['text-2xl', 'text-3xl', 'text-4xl'][Math.floor(Math.random() * 3)],
        })
      }

      setHearts((prev) => [...prev, ...newHearts])
    }

    // Initial batch
    generateHearts()

    // Add hearts periodically
    const interval = setInterval(generateHearts, 2000)

    // Clean up old hearts
    const cleanup = setInterval(() => {
      setHearts((prev) => {
        if (prev.length > 50) {
          return prev.slice(-40)
        }
        return prev
      })
    }, 3000)

    return () => {
      clearInterval(interval)
      clearInterval(cleanup)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`absolute ${heart.size} text-pink-500 fall-heart select-none`}
          style={{
            left: heart.left,
            top: '-2rem',
            animation: `fallHeart ${heart.duration}s linear forwards`,
            animationDelay: `${heart.delay}s`,
            opacity: 0.8,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  )
}

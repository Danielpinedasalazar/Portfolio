"use client"

import { useEffect, useRef } from "react"

export function ParticleField({ theme }: { theme: any }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
      pulse: number
    }> = []

    const getThemeColors = () => {
      switch (theme.name) {
        case "Matrix":
          return ["#00ff41", "#00cc33", "#008822"]
        case "Sunset":
          return ["#ff6b35", "#f7931e", "#ffcc02"]
        case "Ocean":
          return ["#00d4ff", "#0099cc", "#006699"]
        case "Aurora":
          return ["#a855f7", "#3b82f6", "#10b981"]
        case "Cosmic":
          return ["#ec4899", "#8b5cf6", "#6366f1"]
        default:
          return ["#00d4ff", "#6366f1", "#8b5cf6"]
      }
    }

    const colors = getThemeColors()

    // Create particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        particle.pulse += 0.02

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Pulsing effect
        const pulseSize = particle.size + Math.sin(particle.pulse) * 0.5

        // Draw particle with glow effect
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2)

        // Glow effect
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, pulseSize * 3)
        gradient.addColorStop(
          0,
          particle.color +
            Math.floor(particle.opacity * 255)
              .toString(16)
              .padStart(2, "0"),
        )
        gradient.addColorStop(1, particle.color + "00")

        ctx.fillStyle = gradient
        ctx.fill()

        // Core particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulseSize * 0.3, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Draw connections
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)

            const connectionOpacity = (1 - distance / 120) * 0.3
            ctx.strokeStyle =
              particle.color +
              Math.floor(connectionOpacity * 255)
                .toString(16)
                .padStart(2, "0")
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.7 }} />
}

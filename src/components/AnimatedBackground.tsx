import { motion } from "framer-motion";
import { useMemo } from "react";

const cropEmojis = ["🌾", "🌽", "🍚", "🌿", "🍃", "☘️", "🌱", "🍂", "🌻", "🌺", "🍀", "🌴", "🥬", "🍅", "🥕", "🫑", "🌶️", "🥭", "🍋", "🍊"];

interface Particle {
  id: number;
  emoji: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  opacity: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    emoji: cropEmojis[Math.floor(Math.random() * cropEmojis.length)],
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 18 + Math.random() * 20, // Smaller size
    duration: 25 + Math.random() * 15, // Much slower
    delay: Math.random() * -20,
    rotation: Math.random() * 360,
    opacity: 0.15 + Math.random() * 0.15, // More transparent
  }));
}

export default function AnimatedBackground() {
  const particles = useMemo(() => generateParticles(15), []); // Even fewer particles

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Vivid gradient blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[55vw] h-[55vh] rounded-full blur-[120px] opacity-60 dark:opacity-30"
          style={{ background: "radial-gradient(circle, hsl(142 60% 75% / 0.6), transparent 70%)" }} />
        <div className="absolute bottom-0 right-0 w-[60vw] h-[55vh] rounded-full blur-[140px] opacity-55 dark:opacity-25"
          style={{ background: "radial-gradient(circle, hsl(100 55% 80% / 0.5), transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vh] rounded-full blur-[100px] opacity-50 dark:opacity-20"
          style={{ background: "radial-gradient(circle, hsl(38 80% 80% / 0.45), transparent 70%)" }} />
        <div className="absolute top-[15%] right-[20%] w-[30vw] h-[30vh] rounded-full blur-[100px] opacity-40 dark:opacity-15"
          style={{ background: "radial-gradient(circle, hsl(200 60% 80% / 0.35), transparent 70%)" }} />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(142 40% 40%) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Floating crop particles — gentle blow effect only */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute select-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: p.size,
            opacity: p.opacity,
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.08))",
          }}
          animate={{
            x: [0, 30, 0], // Only horizontal drift (blow effect)
            opacity: [p.opacity, p.opacity * 0.7, p.opacity], // Gentle fade
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        >
          {p.emoji}
        </motion.div>
      ))}
    </div>
  );
}

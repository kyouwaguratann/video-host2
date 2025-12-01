import { motion } from 'motion/react';

interface ConfettiProps {
  position: 'top' | 'bottom';
}

const confettiColors = ['#FFD5A0', '#FFB366', '#FF8A00'];
const shapes = ['circle', 'square'] as const;

function generateConfettiPieces(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    shape: shapes[Math.floor(Math.random() * shapes.length)],
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    size: Math.random() * 6 + 8, // 8-14px
    left: Math.random() * 100, // 0-100%
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 4, // 4-7 seconds
    rotation: Math.random() * 360,
  }));
}

export function Confetti({ position }: ConfettiProps) {
  const pieces = generateConfettiPieces(35);
  const isTop = position === 'top';

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.left}%`,
            [isTop ? 'top' : 'bottom']: isTop ? '-20px' : '-20px',
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            borderRadius: piece.shape === 'circle' ? '50%' : '0',
          }}
          initial={{
            y: 0,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: isTop ? [0, 150, 300] : [0, -150, -300],
            opacity: [0, 1, 0.8, 0],
            rotate: [piece.rotation, piece.rotation + 360, piece.rotation + 720],
            x: [0, Math.sin(piece.id) * 50, Math.sin(piece.id * 2) * 30],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
